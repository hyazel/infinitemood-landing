import type { VariantDefinition } from "./types";
import * as CatA from "./CategoryA";
import * as CatB from "./CategoryB";
import * as CatC from "./CategoryC";
import * as CatD from "./CategoryD";

export const VARIANTS: VariantDefinition[] = [
    { id: "tri-split", name: "Tri-Split (Original)", description: "Fragments assemble from corners", component: CatA.VariantTriSplit },
    { id: "vertical-slice", name: "Vertical Slice", description: "Top and bottom halves slide together", component: CatA.VariantVerticalSlice },
    { id: "typewriter", name: "Random Typewriter", description: "Letters appear in random order", component: CatA.VariantTypewriter },
    { id: "explosion", name: "Z-Explosion", description: "Letters fly in from the screen", component: CatA.VariantExplosion },
    { id: "kerning", name: "Kerning Stretch", description: "Wide spacing compresses to tight", component: CatA.VariantKerningStretch },

    // Category B: Tech & Glitch
    { id: "cyber-glitch", name: "Cyber Glitch", description: "RGB split and displacement", component: CatB.VariantCyberGlitch },
    { id: "console", name: "Console Terminal", description: "System typing effect", component: CatB.VariantConsole },
    { id: "pixelate", name: "Pixel Resolution", description: "Low res to high res steps", component: CatB.VariantPixelate },
    { id: "scanline", name: "Scanline Reveal", description: "Bright scanline wipes text", component: CatB.VariantScanline },
    { id: "binary", name: "Binary Decode", description: "0s and 1s resolve to text", component: CatB.VariantBinaryDecode },

    // Category C: Optical & Atmospherics
    { id: "blur-focus", name: "Blur Focus", description: "Heavy blur to sharp", component: CatC.VariantBlurFocus },
    { id: "liquid", name: "Liquid Morph", description: "Liquid parts merging", component: CatC.VariantLiquidMorph },
    { id: "ghosting", name: "Ghosting", description: "Trailing copies snap together", component: CatC.VariantGhosting },
    { id: "gradient-flow", name: "Gradient Flow", description: "Gradient reveals text", component: CatC.VariantGradientFlow },
    { id: "smoke", name: "Smoke/Vapor", description: "Text emerges from mist", component: CatC.VariantSmoke },

    // Category D: Minimal & Geometric
    { id: "mask-reveal", name: "Mask Reveal", description: "Slide up from mask", component: CatD.VariantMaskReveal },
    { id: "line-draw", name: "SVG Line Draw", description: "Stroke animation", component: CatD.VariantLineDraw },
    { id: "flip-card", name: "Flip Card", description: "3D letter flip", component: CatD.VariantFlipCard },
    { id: "elastic", name: "Elastic Snap", description: "Heavy spring bounce", component: CatD.VariantElasticSnap },
    { id: "negative", name: "Negative Space", description: "White block reveals cutout", component: CatD.VariantNegativeSpace },
];

export const getVariant = (id: string) => VARIANTS.find(v => v.id === id);
