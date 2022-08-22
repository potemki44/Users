import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useForm } from "react-hook-form"

export const UsersForm = ({ createusers, pass ,getAllusers, setpass}) => {
    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {

        if (pass) {

            reset(pass)
        }


    }, [pass])

    const defaultobj = {
        first_name: "",
        last_name: "",
        password: "",
        email: "",
        birthday: "",

 }

    const updateUsers = data => {

        const URL2 = `https://users-crud1.herokuapp.com/users/${pass.id}/`

        axios.patch(URL2, data)
            .then(res => {
                console.log(res.data)
                getAllusers()
            })
            .catch(err => (err))

    }
    const defaultVals = data => {
        if (pass) {
            updateUsers(data)
            setpass()
        }
        else {
            createusers(data)
        }
        reset(defaultobj)
    }


    return (

        <article className='Form_article'>
            <h1 className='titulaso'>{pass ? "Update" : "Create"} </h1>
            <form className='Form_form' onSubmit={handleSubmit(defaultVals)}>
                <label className='Form_label' htmlFor='first_name'>First name</label>
                <input className='Form_input' type="text" id="first_name" {...register("first_name")} />
                <label htmlFor='last_name'>Last Name</label>
                <input type="text" id="last_name" {...register("last_name")} />
                <label htmlFor='password'>Password</label>
                <input type="password" id="password" {...register("password")} />
                <label htmlFor='email'>E-mail</label>
                <input type="text" id="email" {...register("email")} />
                <label htmlFor=''>Birthday</label>
                <input type="date" id="" {...register("birthday")} />
                <button>{pass ? "Update" : "Create"} </button>
            </form>
        </article>
    )
}
