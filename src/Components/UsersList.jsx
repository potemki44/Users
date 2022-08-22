import React from 'react'

export const UsersList = ({ user, deletes, updateList, hideFlromList }) => {

    const updateAgain = () => { 
        updateList(user)
        hideFlromList(true) }
    return (

        <div className='list_span'>
            <ul className='list_ul'>
                <li className='list_li'><strong>Name:</strong> {user?.first_name}</li>
                <li><strong>Last Name:</strong>{user?.last_name}</li>
                <li><strong>E-mail</strong>:{user?.email}</li>

                <li><strong>Password:</strong>{user?.password}</li>
                <li><strong>Birth Date:</strong>{user?.birthday}</li>

            </ul>

            <button onClick={() => deletes(user.id)} className="btn_deltes">
                <i className='update' class="fa-solid fa-trash-can"></i></button>
            <button onClick={updateAgain} className='update'><i class="fa-solid fa-pen"></i></button>
        </div>


    )
}
