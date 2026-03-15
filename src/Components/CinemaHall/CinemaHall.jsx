import React, {useState, useEffect} from 'react'
import "./CinemaHall.css"

const ROW=10;

const initialiseCinemaHallSeatsHandler=() => {
    let count=0
    let rowAlphabet=65
    let initilaiseCimenaHallSeats=Array.from({length: Math.pow(ROW, 2)})

    for (let i=0;i<Math.pow(ROW, 2);i++) {
        if (count===ROW) {
            count=0
            rowAlphabet=rowAlphabet+1
        }
        initilaiseCimenaHallSeats[i]={
            value: `${String.fromCharCode(rowAlphabet)}${count}`,
            index: i,
            isSelected: false,
            isBooked: false
        }
        count++
    }

    return initilaiseCimenaHallSeats

}

function CinemaHall() {
    const [cimenaHallSeats, setCinemaHallSeats]=useState([])
    const [selectedSeatCount, setSelectedSeatCount]=useState(0)

    useEffect(() => {
        const initilaiseCimenaHallSeats=initialiseCinemaHallSeatsHandler()
        setCinemaHallSeats(initilaiseCimenaHallSeats)
    }, [])

    const selectSeatHandler=(index) => {
        const tempCinemaHallSeats=[...cimenaHallSeats]
        const clickedSeat=tempCinemaHallSeats[index]
        if (clickedSeat.isSelected) {
            setSelectedSeatCount(selectedSeatCount-1)
        } else {
            setSelectedSeatCount(selectedSeatCount+1)
        }
        tempCinemaHallSeats[index]={
            ...clickedSeat,
            isSelected: !clickedSeat.isSelected
        }
        setCinemaHallSeats(tempCinemaHallSeats)
    }

    const confirmBookSeatsHandler=() => {
        if (selectedSeatCount===0) {
            alert('Please select at least one seat')
        } else {
            const tempCinemaHallSeats=cimenaHallSeats.map((hallSeats) => {
                if (hallSeats.isSelected) {
                    return {
                        ...hallSeats,
                        isBooked: true
                    }
                } else {
                    return hallSeats
                }
            })
            setCinemaHallSeats(tempCinemaHallSeats)
            setSelectedSeatCount(0)
        }
    }

    const clearSelectedSeats=() => {
        const tempCinemaHallSeats=cimenaHallSeats.map((hallSeats) => {
            if (hallSeats.isSelected) {
                return {
                    ...hallSeats,
                    isSelected: false
                }
            } else {
                return hallSeats
            }
        })
        setCinemaHallSeats(tempCinemaHallSeats)
        setSelectedSeatCount(0)
    }

    const resetHandler=() => {
        const initilaiseCimenaHallSeats=initialiseCinemaHallSeatsHandler()
        setCinemaHallSeats(initilaiseCimenaHallSeats)
        setSelectedSeatCount(0)
    }

    return (
        <div className="main-container">
            <h1>Cinema Hall</h1>
            <div className="button-section">
                <button onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    confirmBookSeatsHandler()
                }} data-testid="book-button">
                    Book Seats
                </button>
                <button onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    clearSelectedSeats()
                }} data-testid="clear-button">
                    Clear
                </button>
                <button onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    resetHandler()
                }} data-testid="reset-button">
                    Reset
                </button>
            </div>
            <div onClick={(e) => {
                const seat=e.target.closest('.col');
                if (!seat) return; // click outside seat

                if (!seat.classList.contains('disabled-seat')) {
                    const index=Number(seat.dataset.index);
                    selectSeatHandler(index)
                }
            }}
                onKeyDown={(e) => {
                    if (e.code==="Enter") {
                        const seat=e.target.closest('.col');
                        if (!seat) return; // click outside seat

                        if (!seat.classList.contains('disabled-seat')) {
                            const index=Number(seat.dataset.index);
                            selectSeatHandler(index)
                        }
                    }
                }}
                style={{gridTemplateColumns: `repeat(${ROW},0fr)`}} className="cinema-hall" data-testid="cinema-hall">
                {cimenaHallSeats.map((hallSeat, index) => {
                    return <div tabIndex={0} data-index={index} data-testid={`seat-${hallSeat.value}`} className={`col ${hallSeat.isBooked? "disabled-seat":hallSeat.isSelected? "selected-seat":""}`} key={hallSeat.index} >
                        <span>{hallSeat.value}</span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default CinemaHall