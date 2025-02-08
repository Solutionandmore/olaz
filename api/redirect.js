export default function handler(req, res) {
    const appId = "YOUR_APP_ID";
    const oaId = "YOUR_OA_ID";
    const redirectUri = encodeURIComponent("olaz-git-master-phuoc-thien-les-projects.vercel.app");
    const authUrl = `https://oauth.zaloapp.com/v4/oa/permission?app_id=${appId}&oa_id=${oaId}&redirect_uri=${redirectUri}&code_challenge=YOUR_CODE_CHALLENGE`;

    res.writeHead(302, { Location: authUrl });
    res.end();
}
