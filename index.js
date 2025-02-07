const express = require('express');
const crypto = require('crypto');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/generate-code-challenge', (req, res) => {
    const codeVerifier = req.body.code_verifier;
    if (!codeVerifier) {
        return res.status(400).send({ error: 'code_verifier is required' });
    }

    const hash = crypto.createHash('sha256').update(codeVerifier).digest();
    const codeChallenge = hash.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    res.send({
        code_verifier: codeVerifier,
        code_challenge: codeChallenge
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
