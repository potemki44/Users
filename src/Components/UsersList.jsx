import React from 'react'

export const UsersList = ({ user, deletes, updateList, hideFlromList }) => {

    const updateAgain = () => { 
        updateList(data)
        hideFlromList(true) }
    return (

        <div className='list_span'>
            <ul className='list_ul'>
                <li className='list_li'>Name: {user?.first_name}</li>
                <li>Last Name:{user?.last_name}</li>
                <li>E-mail:{user?.email}</li>

                <li>Password:{user?.password}</li>
                <li>Birth Date:{user?.birthday}</li>

            </ul>

            <button onClick={() => deletes(user.id)}>
                <i className='update' class="fa-solid fa-trash-can"></i></button>
            <button className='erase'><i class="fa-solid fa-pen"></i></button>
        </div>


    )
}
