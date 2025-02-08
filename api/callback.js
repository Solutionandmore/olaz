export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { code } = req.query; // Lấy OAuth Code từ query params

    if (!code) {
        return res.status(400).json({ error: "Missing OAuth Code" });
    }

    // Gửi code đến Railway n8n webhook
    try {
        const response = await fetch("https://primary-production-574f.up.railway.app/webhook/zalo_callback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
        });

        const result = await response.json();
        console.log("Webhook Response:", result);

        res.status(200).send("OAuth Code received and sent to Railway!");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to send OAuth Code to Railway" });
    }
}
