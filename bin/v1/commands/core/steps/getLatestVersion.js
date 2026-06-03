import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "table",
    "v2",
    "commands",
    "table",
    "template"
);

const versions = fs
    .readdirSync(templatePath)
    .filter(item => item.startsWith("v"));

const highestVersion =
    versions.sort().at(-1);

const sourceVersion =
    highestVersion;

export default sourceVersion;