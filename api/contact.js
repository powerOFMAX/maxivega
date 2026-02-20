const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (res, status, payload) => {
  res.statusCode = status
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(payload))
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return json(res, 405, { ok: false, message: "Method not allowed" })
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {})
    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim()
    const subject = String(body.subject ?? "").trim()
    const message = String(body.message ?? body.summary ?? "").trim()

    if (!name || !email || !subject || !message) {
      return json(res, 400, {
        ok: false,
        message: "Please complete name, email, subject and message.",
      })
    }

    if (!EMAIL_REGEX.test(email)) {
      return json(res, 400, {
        ok: false,
        message: "Please provide a valid email address.",
      })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing required email env vars")
      return json(res, 500, {
        ok: false,
        message: "Server email configuration is missing.",
      })
    }

    const providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: [
          "New contact form submission",
          `Name: ${name}`,
          `Email: ${email}`,
          `Subject: ${subject}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    })

    if (!providerResponse.ok) {
      let providerPayload = null
      try {
        providerPayload = await providerResponse.json()
      } catch {
        providerPayload = null
      }

      console.error("Resend provider error", {
        status: providerResponse.status,
        body: providerPayload,
      })

      return json(res, 502, {
        ok: false,
        message:
          "We could not deliver your message right now. Please try again.",
      })
    }

    return json(res, 200, {
      ok: true,
      message: "Thanks! Your message has been sent.",
    })
  } catch (error) {
    console.error("Unexpected contact endpoint error", {
      message: error?.message,
      stack: error?.stack,
    })

    return json(res, 500, {
      ok: false,
      message: "Unexpected server error. Please try again later.",
    })
  }
}
