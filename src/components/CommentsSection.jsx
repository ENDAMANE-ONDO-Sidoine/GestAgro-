import React from "react";

const CommentsSection = () => {
    return (
        <div className="p-10 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">Vos avis comptent</h2>
            <div className="flex justify-center space-x-4 mb-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    👍 Like
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                    ❤️ Love
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                    😊 Joy
                </button>
            </div>
            <p className="text-gray-600 italic">
                * Pour commenter ou réagir, veuillez vous inscrire.
            </p>
        </div>
    );
};

export default CommentsSection;
