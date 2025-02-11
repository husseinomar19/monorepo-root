"use client";
import React from 'react';
import { useState } from 'react';
export default function Test(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    


    const handleSubmit = () => {
        console.log(email, name, age);
    }
    

    return (
        <>

        <form action="" onSubmit={handleSubmit} className=' flex justify-center items-center flex-col m-6 gap-3' >
            <input className='bg-slate-400' type="text" onChange={ (e)=>{setEmail(e.target.value)}}/>
            <input type="text" className='bg-slate-400' onChange={(e) =>{setName(e.target.value)}}/>
            <input type="text" className='bg-slate-400' onChange={(e)=>{setAge(e.target.value)}}/>
            <input type="submit" value="submit" />
        </form>

        </>
    )
}