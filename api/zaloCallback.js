export default function handler(req, res) {
    const { code, state } = req.query;

    if (!code) {
        return res.status(400).json({ error: "Missing oauth_code" });
    }

    res.json({
        message: "Zalo OAuth Code Received",
        oauth_code: code,
        state: state || "No state provided"
    });
}
