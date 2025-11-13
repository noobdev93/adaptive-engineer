const crypto = require("crypto");

const input = process.argv[2];
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(`Input: ${input}`);
console.log(`Hash: ${hash}`);
