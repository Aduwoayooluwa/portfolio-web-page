import React, { useState, useEffect } from 'react';

const CodingPastor: React.FC = () => {
  const [name, setName] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
        const nextLetter = 'Coding Pastor'[name.length];
        if (nextLetter) {
            setName((prevName) => prevName + nextLetter);
        } else {
            clearInterval(timer);
        }
        }, 200);
        return () => clearInterval(timer);
    }, [name]);

    return (
        <div className="w-full h-screen flex justify-center items-center ">
        <h1 className="text-6xl font-extralight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 animate-rainbow-glow animate-delay-2s">
            {name}
        </h1>
        </div>
    );
};

export default CodingPastor;
