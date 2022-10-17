import React from 'react';

const Claim = () => {
    return (
        <div className='container col-6'>
            <h1>Claim Form</h1>
            <form>
                <div class="mb-3">
                    <label class="form-label">What type of claim are you filing?</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Accident/Colision</option>
                        <option value="2">Weather/Natural disaster</option>
                        <option value="3">Vandalism</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label">When did the incident happen?</label>
                    <input type="date" class="form-control" placeholder="Select date..." />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
           
        </div>
    );
}

export default Claim;
