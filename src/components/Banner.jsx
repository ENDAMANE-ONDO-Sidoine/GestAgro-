import React from "react";

const Banner = () => {
    return (
        <div className="bg-green-500 text-white text-center py-20">
            <h1 className="text-5xl font-bold">Bienvenue sur GestAgro</h1>
            <p className="mt-4 text-lg">
                Une plateforme moderne pour les agriculteurs gabonais.
            </p>
            <button className="mt-6 bg-white text-green-500 font-bold py-2 px-4 rounded">
                Explorer
            </button>
        </div>
    );
};

export default Banner;
