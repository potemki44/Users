import React from 'react'
import { useForm } from "react-hook-form"

export const UsersForm = ({ createusers,update }) => {
    const { handleSubmit, register, reset } = useForm()

    const defaultobj = {
        first_name: "",
        last_name: "",
        password: "",
        email: "",
        birthday: "",


    }
    const defaultVals = data => {
        createusers(data)
        reset(defaultobj)

    }


    return (
        <article className='Form_article'>
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
                <button>Submit</button>
            </form>
        </article>
    )
}
