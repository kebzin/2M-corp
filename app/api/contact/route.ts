import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // In a real app you'd validate and persist the data or send emails.
    // For development we just echo the payload and return 200.
    return NextResponse.json({ ok: true, received: body });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 400 }
    );
  }
}
