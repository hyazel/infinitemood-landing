import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
    return (
        <section
            id="manifesto"
            className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-background-primary px-6 py-24 md:py-32"
        >
            <motion.div
                className="max-w-4xl text-center space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1.0,
                            ease: "easeOut",
                            staggerChildren: 0.3
                        }
                    }
                }}
            >
                <motion.p
                    className="text-2xl md:text-4xl font-display font-light text-text-primary leading-relaxed"
                    variants={{
                        hidden: { opacity: 0, filter: 'blur(10px)' },
                        visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1.2 } }
                    }}
                >
                    Fragmnt est une app de musiques d’ambiances composées par des musiciens.
                </motion.p>

                <motion.p
                    className="text-2xl md:text-3xl font-display font-medium text-text-secondary tracking-wide"
                    variants={{
                        hidden: { opacity: 0, filter: 'blur(10px)' },
                        visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1.2 } }
                    }}
                >
                    Sans playlists. Sans streaming. Sans IA.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Manifesto;
