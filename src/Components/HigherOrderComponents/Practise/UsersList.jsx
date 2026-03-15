import React from 'react'

function UsersList({userList=[]}) {
    return (
        <div>
            {userList.map((list, index) => {
                return <div key={index}  >
                    <span>{list.name}</span>
                </div>
            })}
        </div>
    )
}

export default UsersList