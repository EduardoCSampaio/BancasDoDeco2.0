import React, { useEffect, useState } from 'react';

const BallDrop: React.FC<{ participants: string[] }> = ({ participants }) => {
    const [winner, setWinner] = useState<string | null>(null);
    const [isDropping, setIsDropping] = useState<boolean>(false);

    const handleDrop = () => {
        if (participants.length === 0) return;
        setIsDropping(true);
        setWinner(null);

        const randomIndex = Math.floor(Math.random() * participants.length);
        setTimeout(() => {
            setWinner(participants[randomIndex]);
            setIsDropping(false);
        }, 3000); // Simulate a 3-second drop
    };

    return (
        <div className="ball-drop-container">
            <h2>Mini Game: Ball Drop</h2>
            <button onClick={handleDrop} disabled={isDropping}>
                {isDropping ? 'Dropping...' : 'Drop the Ball!'}
            </button>
            {winner && <h3>Winner: {winner}</h3>}
            <style jsx>{`
                .ball-drop-container {
                    text-align: center;
                    margin: 20px;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default BallDrop;