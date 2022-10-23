import React , {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Global from './Global'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const url = Global.url;
    const navigate = useNavigate()

    const [users, setUsers] = useState({})
    const {register, formState:{errors}, handleSubmit} = useForm({
        defaultValues: {
            username:'',
            password:''
        }
    })

    const onSubmit = (data) => {
        console.log(url + 'user/user/' + data.username)
        axios.get(url + 'user/user/' + data.username)
            .then(res => {
                setUsers(res.data) 
            })
        
        console.log(users)
        console.log(users.username === data.username)
        
        if (users.username === data.username){
            localStorage.setItem('userid', users.id)
            localStorage.setItem('auth', true)
            localStorage.setItem('name', data.username)

            navigate(-1)
        }else{
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Username and/or password incorrect',
                showConfirmButton: false,
                timer: 2000
              })
        }
        
    }

    return (
        <div className='container col-4 mb-6'>
            <div className='mb-5 mt-2'>
                <h1 className='subheader'>Login Form </h1>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='g-3'>
                <div className="form-outline mt-2 mb-4">
                    <label className="form-label">User name</label>
                    <input type="input" 
                            className="form-control" 
                            {...register('username', {required:true})}
                    />  
                    {errors.user?.type === 'required' && <p>The user must be entered</p>} 
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" >Password</label>
                    <input type="password" 
                            className="form-control" 
                            {...register('password', {required:true})}
                    />  
                    {errors.pass?.type === 'required' && <p>The password must be entered</p>} 
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                    <div className="col-4">
                    
                    </div>

                    <div className="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <div className="row">
                        <button type="submit" className="btn btn-primary mb-4">Sign in</button>
                </div>
                

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
            </form>
        </div>
        
    );
}

export default Login;
