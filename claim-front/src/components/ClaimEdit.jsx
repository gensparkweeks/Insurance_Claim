import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useParams , useNavigate, NavLink} from 'react-router-dom';
import axios from 'axios';
import Global from './Global';
import Loading from './Loading';
import login from '../statics/images/login.png'
import logout from '../statics/images/logout.png'

const ClaimEdit = () => {

    const {id, user} = useParams();

    const [users, setUsers] = useState([]);
    const [types, setTypes] = useState([]);
    const[status, setStatus] = useState(false);
    const [claim, setClaim] = useState({});

    const auth = localStorage.getItem('auth')
    const userid = localStorage.getItem('userid')
    const name = localStorage.getItem('name')

    const [typeid, setTypeid] = useState(0)
    const [created, setCreated] = useState('2022-10-10')
    const [file, setFile] = useState(null)
    const [des, setDes] = useState('')

    const url = Global.url;
    const uploadPath = Global.uploadPath;

    const navigate = useNavigate();

    const {register, setValue, formState:{errors}, handleSubmit} = useForm()

    const onSubmit = (data) => {
        var uploaded = claim.upload;
        var validExt = false;
        
        if (data.file[0] !== null && data.file[0] !== undefined){         

            const fd = new FormData();
            fd.append('file0', data.file[0]);

            //Validate file ext
            const file = data.file[0].name;
            const index = file.indexOf('.');
            const ext = file.substr(index + 1);

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

        if (!validExt){
            alert("No file was uploaded...)")
        }

        navigate("/");

    }

    const getTypes = ()=>{
        console.log(url + "type")
        axios.get(url + "type")
        .then(res => {
            setTypes(res.data);
        });

        console.log("Types: " + types)
    }

    const getUsers = ()=>{
        axios.get(url + "userinfo/info/" + user)
        .then(res => {
            setUsers(res.data);
            setStatus(true) 
            console.log("UserInfo: " + users)
        });

    }

    const getClaim = ()=> {
        console.log(url + "claim/"+ id)
        axios.get(url + "claim/"+ id)
            .then(res => {
                setStatus(true);
                setClaim(res.data)

                setTypeid(res.data.type.id);
                setCreated(res.data.created.substring(0,10).toString());
                setFile(res.data.upload.toLowerCase());
                setDes(res.data.description);
                
            })
    }

    useEffect(() => {
        getClaim();
        getTypes();
        getUsers();
        
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

    if (claim != null ){
        console.log(claim)
        console.log("States: ", typeid, created, file, des)

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
                <h1 className='subheader'>Editing a Claim</h1>
                <div className='row mb-4 mt-3'>
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
    
                        <div className="col-6">
                            <label className="form-label">What type of claim are you filing?</label>
                            <select className="form-select" 
                                    aria-label="Default select example"
                                    defaultValue={typeid}
                                    onChange={(e)=>setTypeid(e.target.value)}
                                    {...register('claimtype', {required:true})}
                                    >
                                {types.map(ty =>
                                    <option key={ty.id} value={ty.id}>{ty.type}</option>
                                )}
                    
                            </select>
                            {errors.claimtype?.type === 'required' && <p>The type of incident must be entered</p>}
                        </div>
                        <div className="col-6">
                            <label className="form-label">When did the incident happen?</label>
                            <input type="date" 
                                    className="form-control" 
                                    placeholder="Select date..." 
                                    defaultValue={claim.created}
                                    onChange={(e)=>setCreated(e.target.value)}
                                    {...register('created', {required:true})}
                            />
                            {errors.created?.type === 'required' && <p>The date must be entered</p>}
                        </div>  
                    </div>
                
                    <div className="mb-1">                        
                        <label className="form-label" >File to upload (<strong>word</strong> / <strong>pdf</strong>)</label>
                        <input type="file" 
                            className="form-control" 
                            defaultValue={file}
                            onChange={(e)=>setFile(e.target.value)}
                            {...register('file')} 
                        />
                    </div>
         
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" 
                                    placeholder='Description here...' 
                                    rows="3"
                                    defaultValue={des}
                                    onChange={(e)=>setDes(e.target.value)}
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
                    <h3 className='text-center'>There is no Claim to show...</h3>
                <div className='altura'></div>
            </>
            
        )
    }
    
}

export default ClaimEdit;
