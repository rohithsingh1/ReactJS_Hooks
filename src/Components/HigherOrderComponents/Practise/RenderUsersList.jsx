import React, {useState, useEffect} from 'react'
import UsersList from './UsersList'
import HigherOrderComponent from './HigherOrderComponent'

const WrapperComponent=HigherOrderComponent(UsersList)

const usersList=[
    {
        name: "Rohith"
    },
    {
        name: "karthik"
    },
    {
        name: "Geetha"
    },
    {
        name: "Mahesh"
    },
    {
        name: "Vamshi"
    }
]

function RenderUsersList() {
    const [isLoading, setIsLoading]=useState(true)

    useEffect(() => {
        const timer=setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <div>
            <h2>RenderUsersList</h2>
            <WrapperComponent isLoading={isLoading} userList={usersList} />
        </div>
    )
}

export default RenderUsersList