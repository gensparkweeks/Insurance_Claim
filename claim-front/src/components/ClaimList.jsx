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

const ClaimList = () => {

    const [claims, setClaims] = useState([]);
    const [status, setStatus] = useState(false);
    
    const url = Global.url;
    const uploadPath = Global.uploadPath;

    const navigate = useNavigate();

    const onCreate = ()=>{
        navigate("/home")
    }

    const onEdit = (id)=>{
        navigate("/home")
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

    const onTrackit = (id)=>{
        navigate("/home")
    }

    const getClaims = ()=> {
        axios.get(url + "claim")
            .then(res => {
                setStatus(true);
                setClaims(res.data)
            })
    }

    useEffect(getClaims, [claims]);


    if (claims.length >= 1){

        return (
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
                            <th>TrackIt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        claims.map(claim =>
                            <tr key={claim.id}>
                                <td>{claim.user.username}</td>
                                <td>{claim.created.substring(0, 10)}</td>
                                <td>{claim.description.substring(0, 25)+'...'}</td>
                                <td>Attached file</td>
                                <td>{claim.type.type.substring(0, 25)}</td>
                                <td>{claim.status.status}</td>
                                <td>
                                    <img onClick={() => onEdit(claim.user.id)} src={edit} className="img-thumbnail cursor" width={25} alt="Edit" />
                                </td>
                                <td>
                                    <img onClick={() => onDelete(claim.id, claim.user.username)} src={dele} className="img-thumbnail cursor" width={25} alt="Delete" />
                                </td>
                                <td>
                                    <img onClick={() => onTrackit(claim.id)} src={trackit} className="img-thumbnail cursor" width={25} alt="Delete" />
                                </td>
                            </tr>
                            
                            )
                        
                        }
                        
                    </tbody>
                </table>    
            </div>
    
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
