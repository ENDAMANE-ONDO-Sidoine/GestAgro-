import React from "react";

const ServicesCards = () => {
    const services = [
        { title: "Agriculteurs", description: "Suivez vos productions." },
        { title: "Clients", description: "Achetez des produits agricoles." },
        { title: "Fournisseurs", description: "Proposez vos intrants." },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 text-center"
                >
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
                        Découvrir
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ServicesCards;
