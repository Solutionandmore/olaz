export default async function handler(req, res) {
    if (req.method === "GET") {
        const { code, state, oa_id } = req.query;

        if (!code) {
            return res.status(400).json({ error: "Missing OAuth code" });
        }

        // Gửi mã này đến Webhook n8n của bạn
        const webhookUrl = "https://primary-production-574f.up.railway.app/webhook-test/zalo_callback";

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code, state, oa_id })
            });

            if (!response.ok) {
                throw new Error("Webhook request failed");
            }

            return res.status(200).json({ message: "OAuth code sent to n8n successfully" });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
}
