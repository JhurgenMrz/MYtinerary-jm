const { config } = require('../../config');
const jwt = require('jsonwebtoken');

function authtentication(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token
    if (!token) {
        res.status(401).json({ message: "No token, authorization denied" })
    }

    try {
        // Verify Token
        const decoded = jwt.verify(token, config.SecretKey);

        // Add user from payload
        req.user = decoded;
        next()
    } catch (err) {
        res.status(400).json({ message: "Token is not valid" })
    }



}

module.exports = authtentication;