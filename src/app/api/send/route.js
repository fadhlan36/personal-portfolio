import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(
    process.env.RESEND_API_KEY || "re_placeholder_build",
  );

  try {
    const { email, subject, message } = await req.json();
    console.log("Mengirim email dinamis ke:", email);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: `Thank you for contacting me: ${subject}`,
      react: (
        <>
          <h1 style={{ color: "#4f46e5" }}>Halo!</h1>
          <p>Terima kasih telah menghubungi saya melalui halaman portofolio.</p>
          {/* Di bawah ini sudah diperbaiki menggunakan &quot; agar lolos linter Next.js */}
          <p>
            Pesan Anda mengenai <strong>&quot;{subject}&quot;</strong> telah
            saya terima dengan rincian berikut:
          </p>

          <div
            style={{
              padding: "16px",
              backgroundColor: "#f4f4f5",
              borderRadius: "8px",
              margin: "16px 0",
            }}
          >
            <p style={{ whiteSpace: "pre-wrap", color: "#3f3f46", margin: 0 }}>
              {message}
            </p>
          </div>

          <p>
            Saya akan segera membaca pesan Anda dan membalasnya secepat mungkin
            melalui email ini.
          </p>
          <br />
          <p>Salam hangat,</p>
          <p>
            <strong>Fadhlan Faidh</strong>
          </p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
