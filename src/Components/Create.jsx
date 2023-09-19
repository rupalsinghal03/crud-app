import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './create.css'
function Create() {
    const history = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tabledark, settabledark] = useState('')
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
                            <h2>Theme Switcher</h2>
                        </div>
                        <div className="see-emp">
                            <Link to='/read'><button className='p-2 mb-3'>See Notes</button></Link>
                        </div>
                        {/* theme switcher */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                onClick={() => {
                                    if (tabledark === 'table-dark') settabledark(" ")
                                    else settabledark("table-dark")
                                }} />
                        </div>
                        <form onSubmit={handleSubmit} className={`p-5 ${tabledark}`}>

                            <h3 className='p-3'>Create a Note</h3>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="enter name" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="floatingInput">Title</label>

                            </div>
                            <div className="form-floating mb-3">
                                <textarea type="text"
                                    className="form-control"
                                    id="floatingTextarea"
                                    placeholder="enter description"
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingTextarea" className="form-label">Add Description</label>

                            </div>
                            <div className="submit-btn p-2">
                                <button type="submit" className="btn">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create