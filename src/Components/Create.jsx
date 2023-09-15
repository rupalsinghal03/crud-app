import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './create.css'
function Create() {
    const history = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const header = { "Access-Control-Allow-Origin": "*" }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://65041568c8869921ae247c17.mockapi.io/crud-operations', {
            name: name,
            email: email,
            // header,
        })
            .then(() => {
                history('/read')
            })
    }
    return (
        <div>
            <div className="container form-section">
                <div className="row">
                    <div className="col-12">
                        <div className="app-head mb-5 pt-5">
                            <h2>CRUD APP</h2>
                        </div>
                        <div className="see-emp">
                            <Link to='/read'><button className='p-2 mb-3'>See Employees</button></Link>
                        </div>
                        <form onSubmit={handleSubmit} className='p-5'>
                            <h3 className='p-3'>Add Employee</h3>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="enter name" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="floatingInput">Name</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="enter email"
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingInput" className="form-label">Email address</label>

                            </div>
                            <div className="submit-btn p-2">
                                <button type="submit" className="btn">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create