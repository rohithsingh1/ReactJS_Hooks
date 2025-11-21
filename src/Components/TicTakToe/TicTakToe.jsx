import React, {useState} from 'react'
import './TicTakToe.css'

function TicTakToe() {
    const setTicTakToeArrayHandler=() => {
        return new Array(9).fill(null)
    }
    const [ticTakToeArray, setTicTakToeArray]=useState(setTicTakToeArrayHandler())
    const [userTurn, setUserTurn]=useState(false)
    const [isGameFinish, setIsGameFinish]=useState(false)
    const [gameWinner, setGameWinner]=useState(null)

    const checkUserWinner=(A) => {
        const winningScenarios=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        winningScenarios.map((winningUser) => {
            const [indx1, indx2, indx3]=winningUser

            if (A[indx1]!==null&&A[indx1]===A[indx2]&&A[indx1]===A[indx3]) {
                setIsGameFinish(true)
                setGameWinner(`Game Winner is ${A[indx1]}`)
                return
            }
        })

    }

    const checkGameDraw=(A) => {
        if (!A.includes(null)) {
            setIsGameFinish(true)
            setGameWinner(`The Game is draw`)
        }
    }

    const boxClickHandler=(index) => {
        const value=ticTakToeArray[index]
        if (!value) {
            const cloneArray=[...ticTakToeArray]
            cloneArray[index]=userTurn? 'X':'O'
            setTicTakToeArray(cloneArray)
            setUserTurn(!userTurn)
            checkGameDraw(cloneArray)
            checkUserWinner(cloneArray)
        }
    }

    const resetGameHandler=() => {
        setUserTurn(false)
        setIsGameFinish(false)
        setGameWinner(null)
        setTicTakToeArray(setTicTakToeArrayHandler())
    }
    return (
        <div>
            <h2>TicTakToe</h2>
            <div>
                {isGameFinish&&<div className='flex'>
                    <div>{gameWinner}</div>
                    <button className='mLeft-24' onClick={resetGameHandler}>Reset Game</button>
                </div>}
            </div>
            <div> user Turn now {userTurn? 'X':'O'} </div>
            <div className='width50Percen'>
                <div className='gridContainer'>
                    {
                        ticTakToeArray.map((ele, index) => {
                            return (
                                <div key={index} >
                                    <div onClick={() => !isGameFinish? boxClickHandler(index):null} className='boxSize placeCenter'>
                                        <div>{ele}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TicTakToe