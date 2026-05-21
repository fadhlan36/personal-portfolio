import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  // Inisialisasi di dalam fungsi agar aman dari error build Vercel
  const resend = new Resend(
    process.env.RESEND_API_KEY || "re_placeholder_build",
  );

  try {
    const { email, subject, message } = await req.json();
    console.log("Mengirim email dinamis ke:", email);

    const data = await resend.emails.send({
      // 1. Alamat pengirim (Gunakan onboarding@resend.dev jika masih akun gratis)
      from: "onboarding@resend.dev",

      // 2. DI SINI LETAK DINAMISNYA: Email otomatis dikirim ke input pengunjung
      to: [email],

      // 3. Subjek email balasan otomatis
      subject: `Thank you for contacting me: ${subject}`,

      // 4. Isi email menggunakan struktur React component asli bawaan templatemu
      react: (
        <>
          <h1 style={{ color: "#4f46e5" }}>Halo!</h1>
          <p>Terima kasih telah menghubungi saya melalui halaman portofolio.</p>
          <p>
            Pesan Anda mengenai <strong>"{subject}"</strong> telah saya terima
            dengan rincian berikut:
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
