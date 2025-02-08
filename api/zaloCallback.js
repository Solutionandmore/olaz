export default async function handler(req, res) {
    const { code, state } = req.query;

    if (!code) {
        return res.status(400).json({ error: "Missing oauth_code" });
    }

    // Gửi dữ liệu đến webhook n8n
    await fetch("https://primary-production-574f.up.railway.app/webhook/zalo_callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oauth_code: code, state: state || "No state provided" })
    });

    res.json({ message: "Zalo OAuth Code Sent to n8n", oauth_code: code });
}
