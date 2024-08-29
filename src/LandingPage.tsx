import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
            <header className="text-center">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Où es-tu Passé ? 🔍
                </motion.h1>
                <motion.p
                    className="text-lg mb-8 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Retrouvez les personnes qui ont marqué votre vie, qu'il s'agisse d'amis perdus ou de comptes à régler.
                </motion.p>
                <motion.button
                    className="px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.1 }}
                >
                    Commencez votre recherche
                </motion.button>
            </header>

            <section className="mt-20 text-center max-w-3xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Comment ça marche ? 🤔
                </motion.h2>
                <motion.p
                    className="text-lg mb-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Postez une annonce, décrivez la personne que vous cherchez, et laissez notre communauté vous aider à la retrouver.
                </motion.p>
            </section>

            <section className="mt-20 text-center max-w-3xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Pourquoi nous choisir ? 🌟
                </motion.h2>
                <motion.p
                    className="text-lg mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Une plateforme dédiée à la recherche de personnes, qu'il s'agisse de retrouvailles ou de justice.
                </motion.p>
            </section>

            <footer className="mt-20 text-center">
                <motion.button
                    className="px-8 py-3 bg-green-600 rounded-full text-lg font-semibold hover:bg-green-700 transition"
                    whileHover={{ scale: 1.1 }}
                >
                    Rejoignez-nous 🚀
                </motion.button>
            </footer>
        </div>
    );
};

export default LandingPage;
