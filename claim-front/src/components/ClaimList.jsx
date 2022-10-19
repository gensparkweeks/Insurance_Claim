import React from 'react';

const ClaimList = () => {
    return (
        <div>
            <div className="container">
                <div className='sticky-top mb-2 rounded-3'>

                    <h1 className="p-3 bg-header mt-1 mb-0">List of Claims</h1>
                
                    <div className="row fw-bold col-12 bg-little m-auto">
                        <div className="col-1">
                            Owner
                        </div>
                        <div className="col-1 ">
                            Policy
                        </div>
                        <div className="col-1">
                            Car
                        </div>
                        <div className="col-1">
                            Type of filing
                        </div>
                        <div className="col-1">
                            Happened
                        </div>
                        <div className="col-1">
                            Attached file
                        </div>
                        <div className="col-2">
                            Description
                        </div>
                        <div className="col-1">
                            Status
                        </div>
                        <div className="col-1">
                            Edit
                        </div>
                        <div className="col-1">
                            Delete
                        </div>
                        <div className="col-1 ">
                            {/* <img onClick={() => onCreate()} src={create} className="img-thumbnail cursor" width={24} alt="Create" /> */}
                            Add
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClaimList;
