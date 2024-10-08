import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/mafia_bear-removebg-preview.png';

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
                    {/*On va ajouter l'image du logo*/}
                    <div className="flex items-center justify-center gap-3">
                        <div>Où es-tu Passé ?</div>
                        <img src={logo} alt="Logo de l'application" className="w-[60px]" />

                    </div>
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
                    className="px-8 py-3 bg-blue-700 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
                    whileHover={{scale: 1.1}}
                >
                    <a href="https://www.facebook.com/profile.php?id=61565159578647" target="_blank" rel="noreferrer">
                        Commencez votre recherche
                    </a>
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
                    className="px-8 py-3 bg-orange-800 rounded-full text-lg font-semibold hover:bg-green-700 transition"
                    whileHover={{ scale: 1.1 }}
                >
                    <a href="https://www.facebook.com/profile.php?id=61565159578647" target="_blank" rel="noreferrer">
                        Rejoignez-nous 🚀
                    </a>
                </motion.button>
            </footer>
        </div>
    );
};

export default LandingPage;
