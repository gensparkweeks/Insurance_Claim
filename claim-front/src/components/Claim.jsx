import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Global from './Global';

const Claim = () => {

    const {id} = useParams();

    const [users, setUsers] = useState([]);
    const [types, setTypes] = useState([]);
    const[status, setStatus] = useState(false);

    const url = Global.url;
    const imgPath = Global.imgPath;

    const {register, formState:{errors}, handleSubmit} = useForm({
        defaultValues: {
            type: '', 
            description: '',
            created: Date.now(),
            file: []
        }
    })

    const onSubmit = (data) => {
        console.log(data);
  
    }

    const getTypes = ()=>{
        axios.get(url + "type")
        .then(res => {
            setTypes(res.data);
        });
        console.log(types)
    }

    const getUsers = ()=>{
        axios.get(url + "userinfo/info/" + id)
        .then(res => {
            setUsers(res.data);
            setStatus(true) 
        });

    }

    useEffect(() => {
        getUsers();

        getTypes()

    }, []);


    return (
        <div className='container col-7'>
            <h1 className='subheader'>Create a Claim for {id} </h1>
            <div className='row mb-4 mt-3'>
                <div className='col-4 border-bottom'>
                    <p>Owner: <strong>{users[0]+ ' '+users[1]}</strong></p>
                </div>
                <div className='col-4 border-bottom'>
                    <p>Policy: <strong>{users[2]}</strong></p>
                </div>
                <div className='col-4 border-bottom'>
                    <p>Car: <strong>{users[3]+' '+users[4]+' '+users[5]}</strong></p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='g-3'>

                <div className='row'>

                    <div className="col-6 mb-3">
                        <label className="form-label">What type of claim are you filing?</label>
                        <select className="form-select" 
                                aria-label="Default select example"
                                {...register('type', {required:true})}
                                >
                            <option selected>Open this select menu</option>
                            <option value="1">Accident/Colision</option>
                            <option value="2">Weather/Natural disaster</option>
                            <option value="3">Vandalism</option>
                            <option value="4">{types[4].type}</option>
                        </select>
                        {errors.type?.type === 'required' && <p>The type of incident must be entered</p>}
                    </div>
                    <div className="col-6 mb-3">
                        <label className="form-label">When did the incident happen?</label>
                        <input type="date" 
                                className="form-control" 
                                placeholder="Select date..." 
                                {...register('created', {required:true})}
                        />
                        {errors.created?.type === 'required' && <p>The date must be entered</p>}
                    </div>  
                </div>
            
                <div className="mb-3">
                    <label className="form-label" >File to upload (<strong>word</strong> / <strong>pdf</strong>)</label>
                    <input type="file" 
                            className="form-control" 
                            {...register('file')} 
                    />
                </div>
     
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" 
                                placeholder='Description here...' 
                                rows="3"
                                {...register('description', {required:true})} 
                                >

                    </textarea>
                    {errors.description?.type === 'required' && <p>The description must be entered</p>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
           
        </div>
    );
}

export default Claim;
