import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import Global from './Global';
import login from '../statics/images/login.png'
import logout from '../statics/images/logout.png'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import view from '../statics/images/view.png'

const Claim = () => {

    const {id} = useParams();

    const [claim, setClaim] = useState({});
    const [typeId, setTypeId] = useState(0);
    const [users, setUsers] = useState([]);
    const [types, setTypes] = useState([]);
    const[status, setStatus] = useState(false);

    const auth = localStorage.getItem('auth')
    const userid = localStorage.getItem('userid')
    const name = localStorage.getItem('name')
    

    const url = Global.url;
    const navigate = useNavigate();

    const {register, formState:{errors}, handleSubmit} = useForm({
        // defaultValues: {
        //     claimtype: '', 
        //     description: '',
        //     created: '',
        //     file: []
        // }
    })

    const onSubmit = (data) => {
        var uploaded = null;
        var validExt = false;
        if (data.file[0] !== null && data.file[0] !== undefined){         

            const fd = new FormData();
            fd.append('file0', data.file[0]);

            //Validate file ext
            const file = data.file[0].name;
            const index = file.indexOf('.');
            const ext = file.substring(index + 1);

            if(ext==="pdf" || ext==="docx" || ext==="doc"){
                validExt = true;
                uploaded = data.file[0].name;

                //Post
                axios.post(url+"upload", fd)
                .then(res =>{
                    if(res.ok) {
                        console.log(res.data);
                    }
                })
            }
            
        }
        //load parameter to be save
        const loadParams = {
            created: data.created, 
            description: data.description,
            upload: uploaded,
            user:{
                id:id
            },
            type:{
                id: data.claimtype,
            },
            status: {
                id: 1
            }

        }

        //Post
        axios.post(url + "claim", loadParams)
            .then(res => {
                if (res.data){ 
                    console.log(res.data);
                }
            });


        //Sending the email
        
        const msg = `
            You have created a new claim. 
            Please, contact us.
            ${loadParams.description} 
        `;

        emailjs.send('service_wiylkri', 'template_i367izz', {
            fullname: users[0]+ ' '+users[1], 
            email: users[6], 
            message: msg
        }, '40J0Q1y60dITDUwU_');

        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'A new claim was created..',
            showConfirmButton: false,
            timer: 2000
          })

        navigate("/claimlist");

    }

    const getTypes = ()=>{
        axios.get(url + "type")
        .then(res => {
            setTypes(res.data);
        });

        console.log(types)
    }

    const getUsers = ()=>{
        axios.get(url + "userinfo/info/" + userid)
        .then(res => {
            setUsers(res.data);
            setStatus(true) 
        });

    }

    const getClaim = ()=> {
        console.log(url + "claim/"+ id)
        axios.get(url + "claim/"+ id)
            .then(res => {
                setStatus(true);
                setClaim(res.data)
                setTypeId(res.data.type.id)
            })
    }

    useEffect(() => {
        getClaim();
        getUsers();
        getTypes();

    }, []);

    const onLogout = () => {
        localStorage.setItem('auth', false)
        navigate('/home')
    }

    const onLogin = () => {
        navigate('/login')
    }

    const onCancel = () => {
        navigate('/claimlist')
    }

    const onPdf = (file)=> {
        navigate('/pdf/'+file)
    }

    if (status){
        console.log(typeId)
    
        return (
            <>
            <div className='row'>

                <div className='col-10'></div>
                    <div className='col-1'>
                    {
                        auth === 'true' &&  <span>{name}</span>
                    }
                    </div>
                <div className='col-1'>
                   
                    {
                        auth === 'true' ?
                            <img onClick={() => onLogout()} src={logout} className="img-thumbnail cursor" width={35} alt="Create" />
                        : 
                        <   img onClick={() => onLogin()} src={login} className="img-thumbnail cursor" width={35} alt="Create" />
                    }
                    
                </div>
            </div>

            <div className='container col-7'>
                <h1 className='subheader'>Editing a Claim</h1>
                <div className='row mb-4 mt-1'>
                    <div className='col-3 border-bottom'>
                        <p>Owner: <strong>{users[0]+ ' '+users[1]}</strong></p>
                    </div>
                    <div className='col-4 border-bottom'>
                        <p>Policy: <strong>{users[2]}</strong></p>
                    </div>
                    <div className='col-5 border-bottom'>
                        <p>Car: <strong>{users[3]+' '+users[4]+' '+users[5]}</strong></p>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className='g-3'>
    
                    <div className='row'>
    
                        <div className="col-6 mb-1">
                            <label className="form-label">What type of claim are you filing?</label>
                            <select className="form-select" 
                                    aria-label="Default select example"
                                    {...register('claimtype', {required:true})}
                                    >
                                {types.map(ty =>
                                    typeId === ty.id ?
                                        <option key={ty.id} value={ty.id} selected>{ty.type}</option>
                                    :
                                        <option key={ty.id} value={ty.id}>{ty.type}</option>
                                )
                                }
                    
                            </select>
                            {errors.claimtype?.type === 'required' && <p>The type of incident must be entered</p>}
                        </div>
                        <div className="col-6 mb-1">
                            <label className="form-label">When did the incident happen?</label>
                            <input type="date" 
                                    className="form-control" 
                                    placeholder="Select date..." 
                                    defaultValue={claim.created.substring(0, 10)}
                                    {...register('created', {required:true})}
                            />
                            {errors.created?.type === 'required' && <p>The date must be entered</p>}
                        </div>  
                    </div>

                    <div className='row mt-1'>
                    <label className="form-label" >File to upload (<strong>word</strong> / <strong>pdf</strong>)</label>
                    </div>

                    <div className='row'>

                        <div className="mb-1 col-8">
                            
                            <input type="file" 
                                    className="form-control" 
                                    {...register('file')} 
                            />
                        </div>
                        <div className="mb-1 col-2">
                            {
                                claim.upload !== null &&
                                    <img onClick={() => onPdf(claim.upload)} src={view} className="img-thumbnail cursor" width={40} alt="PDF" />
                            }
                        </div>
                    </div>
         
                    <div className="mb-2">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" 
                                    placeholder='Description here...' 
                                    rows="3"
                                    defaultValue={claim.description} 
                                    {...register('description', {required:true})} 
                                    >
    
                        </textarea>
                        {errors.description?.type === 'required' && <p>The description must be entered</p>}
                    </div>
    
                    <div className="col-11 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <div className='col-1 mb-1'></div>
                        <button onClick={()=>{onCancel()}} className="btn btn-secondary">Cancel</button>   
                    </div>
    
                </form>
               
            </div>

            </>

            
        );
    }
    
}

export default Claim;
