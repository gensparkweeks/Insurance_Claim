import React , {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';

const Test = () => {

    const {register, handleSubmit} = useForm()

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const onSubmit = (data) =>{
        alert(JSON.stringify(data))
    }

    const getUser = ()=>{
        axios.get("http://localhost:8080/user/2")
            .then(res=>{
                setUser(res.data.username)
                setPass(res.data.password)
            })
    }

    useEffect(getUser);

    if (user.length > 1){
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='text'
                        defaultValue={user}
                        onChange={(e)=>setUser(e.target.value)}
                        {...register('user1')} 
                    />
    
                    <input type='text'
                        defaultValue={pass}
                        onChange={(e)=>setPass(e.target.value)}
                        {...register('pass1')} 
                    />
    
                    <button type='submit'>Submit</button>
                </form>
                
            </div>
        );
    }
    
}

export default Test;
