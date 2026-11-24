// News-image entry: place the front-page image where the grader expects it.
//
// The image itself is the deliverable (a newspaper front page summing up
// Tuesday 24 November 2026, composed from two AI illustrations with all
// text drawn crisply on top). This program only copies it to the output
// directory, deterministically, with no network access.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
