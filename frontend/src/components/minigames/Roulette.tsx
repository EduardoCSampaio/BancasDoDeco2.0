import React, { useState } from 'react';

const Roulette: React.FC<{ participants: string[]; onWinnerSelect: (winner: string) => void }> = ({ participants, onWinnerSelect }) => {
    const [spinning, setSpinning] = useState(false);
    const [winner, setWinner] = useState<string | null>(null);

    const spinRoulette = () => {
        if (participants.length === 0) return;

        setSpinning(true);
        setWinner(null);

        const randomIndex = Math.floor(Math.random() * participants.length);
        const spinDuration = 3000; // 3 seconds
        const spinInterval = setInterval(() => {
            const index = Math.floor(Math.random() * participants.length);
            setWinner(participants[index]);
        }, 100);

        setTimeout(() => {
            clearInterval(spinInterval);
            setSpinning(false);
            onWinnerSelect(participants[randomIndex]);
            setWinner(participants[randomIndex]);
        }, spinDuration);
    };

    return (
        <div>
            <h2>Roulette</h2>
            <button onClick={spinRoulette} disabled={spinning}>
                {spinning ? 'Spinning...' : 'Spin the Roulette'}
            </button>
            {winner && <h3>Winner: {winner}</h3>}
        </div>
    );
};

export default Roulette;