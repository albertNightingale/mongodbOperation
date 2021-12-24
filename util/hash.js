const crypto = require("crypto");

module.exports.hash = (input) => {
    const hashedPass = crypto.createHash("sha256").update(input).digest("hex");
    return hashedPass; 
}