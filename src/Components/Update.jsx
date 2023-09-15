import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './create.css'

function Update() {
    const navigate = useNavigate()

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://65041568c8869921ae247c17.mockapi.io/crud-operations/${id}`,
            {
                name: name,
                email: email
            }
        ).then(() => {
            navigate("/read")
        })

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 update-section mt-5">
                        <h2 className='mb-3'>Update</h2>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Name</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Email address</label>

                            </div>
                            <div className="submit-btn p-2">
                            <button type="submit" className="btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update