import React from 'react';
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../Component/Layout/Header';

const Hackathonct = () => {
    return (
        <div>
            <Header />
            <div  className="card  w-100 h-100  px-6 p-4  "> 
                <center> <h5 >Create Hackathon</h5> </center><div
                    style={{
                    width: '1.9375em',
                    margin: '0px auto',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor: '#ef4c23',
                    borderImage: 'initial'
                    }}
                /><br/>
                <form >
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text"   class="form-control" id="inputPassword"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <ReactQuill  theme="snow"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Tags</label>
                        <div class="col-sm-10">
                            <input type="text"   class="form-control" id="inputPassword"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organization</label>
                        <div class="col-sm-10">
                            <Select
                                placeholder="Select"
                                // value={company} 
                                // onChange={option => setCompany(option)}
                                // options={companyL}
                                // isSearchable
                                required
                            />
                                {(
                                <input
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ opacity: 0, height: 0 }}
                                // value={company}

                                required
                                />
                                )}  
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Registration URL</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword"/>
                        </div>
                    </div>
                    <center><button className='btn btn-primary' >Submit</button></center>
                </form>
            </div>
        </div>
        )};

export default Hackathonct;
