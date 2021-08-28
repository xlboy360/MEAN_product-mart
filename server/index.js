const express = require("express");
const path = require("path");

const port = process.env.PORT || 4260;
const app = express();

const destinationDir = path.join(__dirname, "../dist");

// Hosting for dist folder
app.use(express.static(destinationDir));
console.log(`Express hosting from ${destinationDir}`);

// Serving index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(destinationDir, "index.html"));
});
console.log(`Serving index.html`);

// Initialize and listen to PORT
app.listen(port, () => console.log(`Express listening on ${port}`));