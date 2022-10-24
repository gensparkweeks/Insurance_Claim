import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'
import Global from './Global'
import Loading from './Loading'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';
import view from '../statics/images/view.png'
import login from '../statics/images/login.png'
import logout from '../statics/images/logout.png'

const ClaimTrack = () => {

    const {id, user} = useParams();

    const {register, handleSubmit} = useForm({
        defaultValues: {
            indexstatus: 2
        }
    })

    const [claim, setClaim] =  useState({});
    const [userInfo, setUserInfo] = useState([])
    const [status, setStatus] = useState(false) 
    const [statusTrack, setStatusTrack] = useState([])
    const [statusName, setStatusName] = useState('')
    const [readTrack, setReadTrack] = useState(0)

    const {url} = Global;
    const navigate = useNavigate();

    const auth = localStorage.getItem('auth')
    const name = localStorage.getItem('name')

    if (name !== 'admin'){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ony administrator has access...',
            showConfirmButton: false,
            timer: 2000
          })
        navigate('/claimlist')
    }
    
    const getUserInfo = () => {
        console.log(url + "userinfo/info/" + user)
        axios.get(url + "userinfo/info/" + user)
        .then(res => {
            setUserInfo(res.data); 
        });
    }

    const getStatusTrack = () => {
        console.log(url + "status")
        axios.get(url + "status")
        .then(res => {
            setStatusTrack(res.data);
        });
    }

    const getClaim = ()=> {
        console.log(url + "claim/"+ id)
        axios.get(url + "claim/"+ id)
            .then(res => {
                setStatus(true);
                setClaim(res.data)
                setReadTrack(res.data.status.id)
            })
    }

    useEffect(() => {
        getClaim();
        getStatusTrack();
        getUserInfo();
        
    }, []);

    const onPdf = (file)=> {
        navigate('/pdf/'+file)
    }

    const onSubmit = (data) => {

        //Update claim
        //load parameter to be updated
        const loadParams = {
            id: id,
            created: claim.created, 
            description: claim.description,
            upload: claim.upload,
            user:{
                id:user
            },
            type:{
                id: claim.type.id,
            },
            status: {
                id: data.indexstatus
            }
        }
       
        //Put
        axios.put(url + "claim", loadParams)
            .then(res => {
                if (res.data){ 
                    console.log(res.data);
                }
            });

        //Sending the email
        var msg = '';
        axios.get(url + 'status/' + data.indexstatus)
            .then(res => {
                setStatusName(res.data.status)
            })

        msg = `
            This claim was update to status: ${statusName}. 
            Please, contact us.
            ${claim.description} 
        `;

        emailjs.send('service_wiylkri', 'template_i367izz', {
            fullname: userInfo[0]+ ' '+userInfo[1], 
            email: userInfo[6], 
            message: msg
        }, '40J0Q1y60dITDUwU_');
        
        Swal.fire("Good job!", "An email was sent!", "success");
        navigate("/claimlist");   

    }

    const onLogout = () => {
        localStorage.setItem('auth', false)
        navigate('/home')
    }

    const onLogin = () => {
        navigate('/login')
    }

    const onCancel = ()=>{
        navigate("/claimlist");
    }

    if (claim != null ){

        return (
            <>
            <div className='row mt-1'>
                <div className='col-10'></div>
                <div className='col-1'>
                {
                     auth === 'true' &&  <span>{name}</span>
                }
                </div>
                <div className='col-1'>
                    {/* {
                        auth === 'true' ?
                            
                            <button onClick={onLogout} className="btn btn-secondary">Logout</button>
                        : 
                            <button onClick={onLogin} className="btn btn-secondary">Login</button>
                    } */}
                    
                    {
                        auth === 'true' ?
                            <img onClick={() => onLogout()} src={logout} className="img-thumbnail cursor" width={35} alt="Create" />
                        : 
                        <   img onClick={() => onLogin()} src={login} className="img-thumbnail cursor" width={35} alt="Create" />
                    }
                </div>
            </div>

            <div className='container col-7'>
                <h1 className='subheader'>Tracking a Claim</h1>

                <fieldset disabled>

                    <div className='row'>
                        <div className='col-4 border-bottom'>
                            <p>Owner: <strong>{userInfo[0]+ ' '+userInfo[1]}</strong></p>
                        </div>
                        <div className='col-4 border-bottom'>
                            <p>Policy: <strong>{userInfo[2]}</strong></p>
                        </div>
                        <div className='col-4 border-bottom'>
                            <p>Car: <strong>{userInfo[3]+' '+userInfo[4]+' '+userInfo[5]}</strong></p>
                        </div>
                    </div>

                    <div className='row mb-1' >
                        <div className='col-5'>
                            <label className='form-label'><strong>Date of the incident</strong></label>
                            <input type='text' id="disabledTextInput" className='form-control'
                                value={claim.created ? claim.created.substring(0,10) : ''}
                                
                            />
                        </div>

                        <div className='col-7'>
                            <label className='form-label'><strong>Description</strong></label>
                            <textarea className='form-control' 
                                rows="3"
                                value={claim.description ? claim.description : 'No description loaded'}
                            
                            />
                        </div >
                    </div>

                    <div className='row' >
                        <div className='col-5'>
                            <label className='form-label'><strong>Type of incident</strong></label>
                            <input type='text' className='form-control'
                                value={claim.type ? claim.type.type : 'No type loaded'}

                            />
                        </div>
                        <div className='col-7'>
                            <label className='form-label'><strong>File uploaded</strong></label>
                            <input type='text' className='form-control'
                                value={claim.upload != null ? claim.upload.substring(0,30).toLowerCase() : 'No file uploaded'}

                            />
                            {
                                claim.upload !== null &&
                                    <img onClick={() => onPdf(claim.upload)} src={view} className="img-thumbnail cursor" width={40} alt="PDF" />
                            }
                            
                        </div>
                    </div>
                </fieldset>

                <form onSubmit={handleSubmit(onSubmit)} className='g-3'>
    
                    <div className="col-3">
                        <label className="form-label"><strong>Modify the status</strong></label>
                        <select className="form-select" 
                                aria-label="Default select example"
                                {...register('indexstatus', {required:true})}
                                >
                            {
                                statusTrack.map(st =>                                    
                                    st.id === readTrack ?
                                        <option key={st.id} value={st.id} selected>{st.status}</option>
                                    :
                                        <option key={st.id} value={st.id}>{st.status}</option>            
                                )
                            }
                
                        </select>
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

    }else if(!status){
        return(
            <div>
                <Loading />
            </div>
        )
    }else{
        return(
            <>
                <div className='altura'></div>
                    <h3 className='text-center'>There is no Claims to show...</h3>
                <div className='altura'></div>
            </>
            
        )
    }
    
}

export default ClaimTrack;
