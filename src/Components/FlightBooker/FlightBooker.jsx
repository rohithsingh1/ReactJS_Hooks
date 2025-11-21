import React, {useState} from 'react'
import './styles.css'

const dropDownValues=[{
    key: 'One-way-flight',
    value: 'One way flight'
}, {
    key: 'Round-trip-flight',
    value: 'Round trip flight'
}]

function FlightBooker() {
    const getTomorrowDate=() => {
        const today=new Date();
        today.setDate(today.getDate()+1);
        const tomorrow=today.toISOString().split("T")[0];
        return tomorrow
    }
    const [selectedOption, setSelectedOption]=useState(null)
    const [flightBookDates, setFlightBookDates]=useState({
        to: getTomorrowDate(),
        from: getTomorrowDate()
    })

    const bookFlightTicketsDates=() => {
        if (selectedOption==='Round-trip-flight') {
            const from=new Date(flightBookDates.from).getTime()
            const to=new Date(flightBookDates.to).getTime()
            if (from>to) {
                alert("from date can not be after the to date")
            } else {
                alert('Successfully booked flight')
            }
        } else {
            alert('Successfully booked flight')
        }
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation()
        }} className='flexColumn gap-16'>
            <select className='width-50' onChange={(e) => {
                console.log("e>>>>>>>>", e.target.value)
                setSelectedOption(e.target.value)
            }} >
                {dropDownValues.map((ele) => {
                    return (
                        <option key={ele.key} value={ele.key}  >{ele.value}</option>
                    )
                })}
            </select>
            <input className='width-50' type="date" required value={flightBookDates.from} min={getTomorrowDate()} onChange={(e) => setFlightBookDates((prev) => {
                return {
                    ...prev,
                    from: e.target.value
                }
            })} />
            {selectedOption==='Round-trip-flight'&&<input className='width-50' required type="date" value={flightBookDates.to} min={getTomorrowDate()} onChange={(e) => setFlightBookDates((prev) => {
                return {
                    ...prev,
                    to: e.target.value
                }
            })} />}
            <button className='width-50' onClick={bookFlightTicketsDates}>Book</button>
        </form>
    )
}

export default FlightBooker