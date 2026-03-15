import React, {useMemo, useState} from "react";
import "./TicTakToe.css";

const createBoard=(size) =>
    Array.from({length: size*size}, (_, index) => ({
        index,
        value: null
    }));

const getWinningCases=(size) => {
    const winningCases=[];

    for (let row=0;row<size;row++) {
        winningCases.push(
            Array.from({length: size}, (_, col) => row*size+col)
        );
    }

    for (let col=0;col<size;col++) {
        winningCases.push(
            Array.from({length: size}, (_, row) => row*size+col)
        );
    }

    winningCases.push(Array.from({length: size}, (_, i) => i*size+i));
    winningCases.push(Array.from({length: size}, (_, i) => i*size+(size-1-i)));

    return winningCases;
};

function TicTakToe() {
    const noOfBoxes=3;
    const winningCases=useMemo(() => getWinningCases(noOfBoxes), [noOfBoxes]);
    const [boxes, setBoxes]=useState(() => createBoard(noOfBoxes));
    const [currentUser, setCurrentUser]=useState("X");
    const [isWinner, setIsWinner]=useState({
        stop: false,
        winner: null
    });
    const [countNoOfBoxesClicked, setNoOfBoxesClicked]=useState(0);

    const boxClickHandler=(box) => {
        if (box.value||isWinner.stop) return;

        const nextClickedCount=countNoOfBoxesClicked+1;
        setNoOfBoxesClicked(nextClickedCount);

        const tempBoxes=[...boxes];
        tempBoxes[box.index]={
            ...tempBoxes[box.index],
            value: currentUser
        };
        setBoxes(tempBoxes);

        const hasWinner=winningCases.some((winningCase) =>
            winningCase.every((index) => tempBoxes[index].value===currentUser)
        );

        if (hasWinner) {
            setIsWinner({
                stop: true,
                winner: currentUser
            });
            return;
        }

        if (nextClickedCount===noOfBoxes*noOfBoxes) {
            setIsWinner({
                stop: true,
                winner: null
            });
            return;
        }

        setCurrentUser(currentUser==="X"? "O":"X");
    };

    const resetGameHandler=() => {
        setBoxes(createBoard(noOfBoxes));
        setIsWinner({stop: false, winner: null});
        setNoOfBoxesClicked(0);
        setCurrentUser("X");
    };

    return (
        <div>
            <h2>TicTakToe Game</h2>
            {isWinner.stop? (
                <div>
                    <button onClick={resetGameHandler}>Restart Game</button>
                    {isWinner.winner? <div>Winner is {isWinner.winner}</div>:<div>Game Draw</div>}
                </div>
            ):(
                <h2>CurrentUser:- {currentUser}</h2>
            )}
            <div
                className="gridContainer"
                style={{gridTemplateColumns: `repeat(${noOfBoxes}, 120px)`}}
            >
                {boxes.map((box) => {
                    return (
                        <div onClick={() => boxClickHandler(box)} className="boxContainer" key={box.index}>
                            <span>{box.value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TicTakToe;
