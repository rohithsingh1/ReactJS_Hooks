import React, {useState} from 'react'
import "./ChessBoard.css"

function ChessBoard() {
    const [chessBoardDimensions, setChessBoardDimensions]=useState(null)
    return (
        <div>
            <div className='flexColumn'>
                <label htmlFor='chessBoardDimensionsInput'>ChessBoard</label>
                <input id='chessBoardDimensionsInput' className='width200' type="number" min={2} max={10} onChange={(e) => {
                    setChessBoardDimensions(Number(e.target.value))
                }} />
            </div>
            {chessBoardDimensions&&<div className='mTop16'>
                {
                    Array.from({length: chessBoardDimensions}, (_, index) => index).map((_, index1) => {
                        return <div className='flex'>
                            {
                                Array.from({length: chessBoardDimensions}, (_, index) => index).map((_, index2) => {
                                    const key=''+index1+index2
                                    const key2=(index1+index2)%2
                                    return <div key={key} className={`square10 ${key2===1? 'black':'white'}`} >
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </div>}
        </div>
    )
}

export default ChessBoard