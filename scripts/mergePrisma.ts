import * as path from "path";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config({
    path: path.join(process.cwd(), ".env.development"),
});

const rootDir = process.cwd();
const modelsDir = path.join(rootDir, "prisma/models");
const schemaPath = path.join(rootDir, "prisma/schema.prisma");

const MODEL_MARKER = "// --- MODELS ---";

const originalSchema = fs.readFileSync(schemaPath, "utf-8");
const markerIndex = originalSchema.indexOf(MODEL_MARKER);
if (markerIndex === -1) {
    throw new Error("❌ Model marker not found in schema.prisma");
}
const schemaHeader = originalSchema.slice(0, markerIndex + MODEL_MARKER.length);

const modelFiles = fs.readdirSync(modelsDir).filter(file => file.endsWith(".prisma"));

let mergedModels = "";

for (const modelFile of modelFiles) {
    const filePath = path.join(modelsDir, modelFile);
    const modelContent = fs.readFileSync(filePath, "utf-8");
    mergedModels += modelContent.trim() + "\n\n";
}

const finalSchema = schemaHeader + "\n\n" + mergedModels;

fs.writeFileSync(schemaPath, finalSchema);
console.log("✅ Schema merged successfully");
