import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  telefono: z.string().trim().max(40).optional().or(z.literal("")),
  dataEvento: z.string().trim().min(8).max(20),
  location: z.string().trim().min(2).max(200),
  tipo: z.enum(["matrimonio", "evento-privato"]),
  invitati: z.string().trim().max(10).optional().or(z.literal("")),
  note: z.string().trim().max(2000).optional().or(z.literal("")),
  privacy: z.literal(true),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON non valido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Controllate i campi del modulo" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.REQUEST_TO_EMAIL;

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "Giuseppe Goffi <onboarding@resend.dev>",
          to: [to],
          reply_to: data.email,
          subject: `Richiesta disponibilità — ${data.nome}`,
          text: [
            `Nome: ${data.nome}`,
            `Email: ${data.email}`,
            `Telefono: ${data.telefono || "—"}`,
            `Data: ${data.dataEvento}`,
            `Location: ${data.location}`,
            `Tipo: ${data.tipo}`,
            `Invitati: ${data.invitati && data.invitati !== "" ? data.invitati : "—"}`,
            `Note: ${data.note || "—"}`,
            "",
            "Questa non è una prenotazione confermata.",
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error", err);
        return NextResponse.json(
          { ok: false, error: "Invio email non riuscito" },
          { status: 502 },
        );
      }
    } catch (e) {
      console.error(e);
      return NextResponse.json(
        { ok: false, error: "Invio email non riuscito" },
        { status: 502 },
      );
    }
  } else {
    console.info("[richiesta]", JSON.stringify(data));
  }

  return NextResponse.json({ ok: true });
}
