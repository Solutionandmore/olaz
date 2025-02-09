export default async function handler(req, res) {
    const { code, state } = req.query;

    if (!code) {
        return res.status(400).json({ error: "Missing oauth_code" });
    }

    // Gửi oauth_code đến webhook của n8n
    const response = await fetch("https://primary-production-574f.up.railway.app/webhook-test/zalo_callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oauth_code: code, state: state || "No state provided" })
    });

    // Phản hồi lại kết quả
    const responseData = await response.json();
    res.json({ message: "Zalo OAuth Code Sent to n8n", oauth_code: code, n8n_response: responseData });
}
