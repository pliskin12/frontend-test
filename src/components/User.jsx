import React from 'react'

export default function User({user}) {
    return (
        <>
            <div>
                <img width={60} src={user.photo} alt="avatar"/>
                {user.name}
            </div>
            <span>
                {user.description}
            </span>
        </>
    )
}
