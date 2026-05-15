export default function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { password } = req.body;
    
    // Retrieve the secret password from Vercel's environment variables
    const correctPassword = process.env.PASSWORD;

    if (password === correctPassword) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, error: 'Incorrect password' });
    }
}
