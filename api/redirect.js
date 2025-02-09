export default function handler(req, res) {
    const appId = "2660693949023071086";  // Thay bằng App ID của bạn
    const redirectUri = encodeURIComponent("https://olaz-phuoc-thien-les-projects.vercel.app/api/zaloCallback");

    const authUrl = `https://oauth.zaloapp.com/v4/oa/permission?app_id=${appId}&redirect_uri=${redirectUri}`;

    res.writeHead(302, { Location: authUrl });
    res.end();
}
