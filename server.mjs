import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';
import 'dotenv/config'; // or: import dotenv from 'dotenv'; dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const distPath = path.resolve(__dirname, 'dist');

app.get(/^\/(?!.*\.(css|js)$).*$/, (_req, res) => {
  const indexPath = path.resolve(distPath, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');

  const configScript = `
    <script>
      window.__API_CONFIG__ = {
        API_DOMAIN: "${process.env.API_DOMAIN}",
        API_KEY: "${process.env.API_KEY}"
      };
    </script>
  `;

  html = html.replace('</head>', `${configScript}</head>`);
  res.send(html);
});

const PORT = process.env.CLIENT_PORT || 5173;

app.use(express.static(distPath));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

