

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useTranslation } from '../i18n';

const frameCount = 187;
const currentFrame = (index: number) => `/frames/frame_${index.toString().padStart(4, '0')}.jpg`;

// --- SUB-COMPONENTS ---

const MiniPlayer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-lg">
            {/* Play Button Icon */}
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>

            {/* EQ Animation */}
            <div className="flex items-end gap-1 h-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-black rounded-full"
                        animate={{
                            height: ["40%", "100%", "30%", "80%", "40%"]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.1,
                            repeatType: "mirror"
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-col">
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-black/40">{t('influencesB.nowPlaying')}</span>
                <span className="text-xs font-display font-medium text-black">{t('influencesB.track')}</span>
            </div>
        </div>
    );
};

interface InfluencesBProps {
    onWidgetTrigger?: (show: boolean) => void;
}

const InfluencesB: React.FC<InfluencesBProps> = ({ onWidgetTrigger }) => {
    const { t } = useTranslation();
    const targetRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Preload all frames
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };
            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, []);

    // Draw first frame when images are loaded
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        const firstImg = images[0];
        if (firstImg && firstImg.complete) {
            canvas.width = firstImg.width;
            canvas.height = firstImg.height;
            context.drawImage(firstImg, 0, 0);
        }
    }, [imagesLoaded, images]);

    // Detect when to trigger widget (when text disappears around 0.95)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (onWidgetTrigger) {
            // Trigger when passed 0.92 (text starts fading out)
            onWidgetTrigger(latest > 0.92);
        }
    });

    // --- TIMELINE (0.00 - 1.00) ---
    // Rebalanced: Early content 0-70%, Video scrubbing 70-100% (30%)

    // STEP 1: "Des ambiances qui s'écoutent" (0.00 - 0.15)
    const text1Opacity = useTransform(scrollYProgress, [0.00, 0.05, 0.12, 0.15], [1, 1, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0.00, 0.15], ["20px", "-20px"]);

    // STEP 2: "Et se regardent" (0.18 - 0.32)
    const text2Opacity = useTransform(scrollYProgress, [0.18, 0.22, 0.29, 0.32], [0, 1, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.18, 0.32], ["20px", "-20px"]);

    // BACKGROUND COLOR CHANGE (0.15 - 0.90)
    const bgOpacity = useTransform(scrollYProgress, [0.15, 0.18, 0.90, 1.00], [0, 1, 1, 0]);

    // --- STEP 3 SPLIT NARRATIVE ---

    // BEAT 1: MUSIC (0.35 - 0.50)
    const musicBeatOpacity = useTransform(scrollYProgress, [0.35, 0.40, 0.47, 0.50], [0, 1, 1, 0]);
    const musicBeatY = useTransform(scrollYProgress, [0.35, 0.50], ["30px", "-30px"]);

    // BEAT 2: VISUAL - CAPSULE AND VIDEO (0.53 - 1.00)

    // Title Animation - Visible during capsule growth (0.53 - 0.85)
    const visualBeatOpacity = useTransform(scrollYProgress, [0.53, 0.58, 0.82, 0.85], [0, 1, 1, 0]);
    const visualBeatY = useTransform(scrollYProgress, [0.53, 1.00], ["20px", "-25vh"]);

    // Text Shadow
    const textColor = useTransform(scrollYProgress, [0.58, 0.65], ["#16131B", "#FFFFFF"]);
    const textShadow = useTransform(scrollYProgress, [0.58, 0.65], ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 6px rgba(0,0,0,0.5)"]);

    // CAPSULE ANIMATION (0.53 - 0.70)
    const capsuleOpacity = useTransform(scrollYProgress, [0.53, 0.58, 0.98, 1.00], [0, 1, 1, 1]);
    const capsuleY = useTransform(scrollYProgress, [0.53, 0.70], ["100vh", "0vh"]);
    const capsuleWidth = useTransform(scrollYProgress, [0.53, 0.70], ["90vw", "100vw"]);
    const capsuleHeight = useTransform(scrollYProgress, [0.53, 0.70], ["60vh", "100vh"]);
    const capsuleRadius = useTransform(scrollYProgress, [0.53, 0.70], ["3rem", "0rem"]);
    const capsuleShadow = useTransform(scrollYProgress, [0.58, 0.70], ["0px 0px 0px 0px rgba(0,0,0,0)", "0px 25px 50px -12px rgba(0,0,0,0.5)"]);

    // IMAGE PARALLAX
    const imageScale = useTransform(scrollYProgress, [0.53, 1.00], [1.3, 1.2]);
    const imageY = useTransform(scrollYProgress, [0.53, 1.00], ["-10%", "0%"]);

    // VIDEO SCRUBBING - 30% of scroll (0.70 - 1.00)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        // Video scrubbing active when capsule is fullscreen (0.70 - 1.00)
        if (latest >= 0.70 && latest <= 1.00) {
            // Map scroll progress to frame index
            const progress = (latest - 0.70) / (1.00 - 0.70);
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(progress * frameCount)
            );

            const img = images[frameIndex];
            if (img && img.complete) {
                canvas.width = img.width;
                canvas.height = img.height;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0);
            }
        }
    });

    return (
        <section ref={targetRef} className="relative bg-background-inverted overflow-clip z-30" style={{ height: 'calc(var(--vh, 1vh) * 2000)' }}>
            {/* STICKY CONTAINER */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* --- BACKGROUND INVERTED OVERLAY --- */}
                <motion.div
                    style={{ opacity: bgOpacity }}
                    className="absolute inset-0 bg-[#F4EFE6] z-0 pointer-events-none"
                />

                {/* --- STEP 1: TEXT --- */}
                <motion.div
                    style={{ opacity: text1Opacity, y: text1Y }}
                    className="absolute z-10 text-center px-4"
                >
                    <h2 className="text-4xl md:text-7xl font-display font-medium leading-[1.1] tracking-tighter text-text-inverted">
                        {t('influencesB.listen')} <br /> {t('influencesB.listenLine2')}
                    </h2>
                </motion.div>

                {/* --- STEP 2: TEXT --- */}
                <motion.div
                    style={{ opacity: text2Opacity, y: text2Y }}
                    className="absolute z-10 text-center px-4"
                >
                    <h2 className="text-4xl md:text-7xl font-display italic font-light leading-[1.1] tracking-tighter text-text-inverted">
                        {t('influencesB.watch')}
                    </h2>
                </motion.div>

                {/* --- STEP 3 (BEAT 1): MUSIC --- */}
                <motion.div
                    style={{ opacity: musicBeatOpacity, y: musicBeatY }}
                    className="absolute z-10 text-center px-4 flex flex-col items-center gap-8"
                >
                    <h2 className="text-[28px] md:text-5xl font-display font-light leading-tight tracking-tight text-text-inverted max-w-2xl">
                        {t('influencesB.musicTitle')} <br />
                        <span className="font-normal italic">{t('influencesB.musicSubtitle')}</span>
                    </h2>

                    <MiniPlayer />
                </motion.div>

                {/* --- STEP 3 (BEAT 2): VISUAL --- */}
                {/* Text is z-20 to stay ON TOP of the full screen image (z-10) */}
                <motion.div
                    style={{
                        opacity: visualBeatOpacity,
                        y: visualBeatY
                    }}
                    className="absolute z-20 text-center px-4 w-full max-w-4xl flex flex-col items-center pointer-events-none"
                >
                    <motion.h2
                        style={{ color: textColor, textShadow: textShadow }}
                        className="text-[28px] md:text-6xl font-display font-light leading-tight tracking-tight text-text-inverted italic"
                    >
                        {t('influencesB.visualTitle')}
                    </motion.h2>
                </motion.div>

                {/* CAPSULE */}
                <motion.div
                    style={{
                        opacity: capsuleOpacity,
                        y: capsuleY,
                        width: capsuleWidth,
                        height: capsuleHeight,
                        borderRadius: capsuleRadius,
                        boxShadow: capsuleShadow
                    }}
                    className="absolute z-10 overflow-hidden bg-black shadow-2xl"
                >
                    <motion.div
                        style={{
                            scale: imageScale,
                            y: imageY
                        }}
                        className="w-full h-full relative"
                    >
                        <canvas
                            ref={canvasRef}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Glossy Overlay/Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none z-10" />

                </motion.div>
            </div>
        </section>
    );
};

export default InfluencesB;
