import axios from 'axios';
import React , {useState, useEffect} from 'react';
import Global from './Global'
import edit from '../statics/images/edit.png'
import trackit from '../statics/images/modify.png'
import dele from '../statics/images/erase.png'
import create from '../statics/images/create.png';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Swal from 'sweetalert2'
import login from '../statics/images/login.png'
import logout from '../statics/images/logout.png'

const ClaimList = () => {

    const [claims, setClaims] = useState([]);
    const [status, setStatus] = useState(false);

    const auth = localStorage.getItem('auth')
    const userid = localStorage.getItem('userid')
    const name = localStorage.getItem('name')

    const url = Global.url;
    const navigate = useNavigate();
    const urlFull =  name === 'admin' ? url + 'claim' : url + 'claim/name/' + name;

    const onCreate = ()=>{
        navigate("/claim/"+ userid)
    }

    const onEdit = (id, user)=>{
        navigate("/claimedit/"+id+"/"+user)
    }

    const onDelete = (id, name)=>{
        Swal.fire({
            icon: "warning",
            title: "Are you sure to delete '"+ name +"' article?",
            showDenyButton: true,
            denyButtonText: "Cancel",
            denyButtonColor: "#6C757D",
            confirmButtonText: "Delete",
            confirmButtonColor: "#0D6EFD",
          }).then((res) => {
            if (res.isConfirmed) {
                axios.delete(url + "claim/"+ id)
                .then(res => {
                  setStatus(false);
              })

            }
           
          });
    }

    const onTrackit = (id, user)=>{
        navigate("/claimtrack/"+id+"/"+user)
    }

    const getClaims = ()=> {
        console.log('urlFull', urlFull)
        axios.get(urlFull)
        .then(res => {
            setStatus(true);
            setClaims(res.data)
        })
        
    }

    useEffect(getClaims, [claims]);

    const onLogout = () => {
        localStorage.setItem('auth', false)
        navigate('/home')
    }

    const onLogin = () => {
        navigate('/login')
    }

    if (auth === 'false'){
        navigate('/login')
    }

    if (claims.length >= 1){
        
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
                  
                    {
                        auth === 'true' ?
                            <img onClick={() => onLogout()} src={logout} className="img-thumbnail cursor" width={35} alt="Create" />
                        : 
                        <   img onClick={() => onLogin()} src={login} className="img-thumbnail cursor" width={35} alt="Create" />
                    }
                </div>
            </div>
            
            <div className="container mt-3">
                <h2>List of Claims</h2>
               
                    <p>
                        <img onClick={() => onCreate()} src={create} className="img-thumbnail cursor" width={24} alt="Create" />
                        <span> <strong>Add a claim</strong> </span>   
                    </p> 
                                  
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Happened</th>
                            <th>Description</th>
                            <th>Attached file</th>
                            <th>Type of claim</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            {
                                name === 'admin' && <th>TrackIt</th>
                                
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                        claims.map(claim =>
                            <tr key={claim.id}>
                                <td>{claim.user.username}</td>
                                <td>{claim.created.substring(0, 10)}</td>
                                <td>{claim.description.substring(0, 25)+'...'}</td>
                                
                                {
                                claim.upload != null ?
                                    
                                    <td>{claim.upload.toLowerCase().substring(0,15)}</td>
                                :
                                    <td>No file attached</td>
                                }
                                
                                
                                <td>{claim.type.type.substring(0, 25)}</td>
                                <td>{claim.status.status}</td>
                                <td>
                                    <img onClick={() => onEdit(claim.id, claim.user.id)} src={edit} className="img-thumbnail cursor" width={25} alt="Edit" />
                                </td>
                                <td>
                                    <img onClick={() => onDelete(claim.id, claim.user.username)} src={dele} className="img-thumbnail cursor" width={25} alt="Delete" />
                                </td>

                                { name === 'admin' &&
                                    <td>
                                        <img onClick={() => onTrackit(claim.id, claim.user.id)} src={trackit} className="img-thumbnail cursor" width={25} alt="Trackit" />
                                    </td>
                                }
                                
                            </tr>
                            
                            )
                        
                        }
                        
                    </tbody>
                </table>    
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

export default ClaimList;