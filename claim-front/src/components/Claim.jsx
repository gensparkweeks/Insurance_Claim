import React from 'react';
import { useForm } from 'react-hook-form';

const Claim = () => {

    const {register, formState:{errors}, handleSubmit} = useForm({
        defaultValues: {
            name: '', 
            description: '',
            file: [],
            photo: null,
            completed:false
        }
    })

    const onSubmit = (data) => {

    }


    return (
        <div className='container col-7'>
            <h1 className='subheader'>Create a Claim</h1>
            <div className='row mb-4 mt-3'>
                <div className='col-4 border-bottom'>
                    <p>Owner: <strong>John Olivera</strong></p>
                </div>
                <div className='col-4 border-bottom'>
                    <p>Policy: <strong>DODGE-111-4545</strong></p>
                </div>
                <div className='col-4 border-bottom'>
                    <p>Car: <strong>2016 Dodge Challenger</strong></p>
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
                        </select>
                        {errors.type?.type === 'required' && <p>The name must be entered</p>}
                    </div>
                    <div className="col-6 mb-3">
                        <label className="form-label">When did the incident happen?</label>
                        <input type="date" 
                                className="form-control" 
                                placeholder="Select date..." 
                                {...register('created', {required:true})}
                        />
                        {errors.created?.type === 'required' && <p>The name must be entered</p>}
                    </div>  
                </div>
            
                <div className="mb-3">
                    <label classNameName="form-label" >File to upload (<strong>word</strong> / <strong>pdf</strong>)</label>
                    <input type="file" 
                            className="form-control" 
                            {...register('file')} 
                    />
                </div>
     
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
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
