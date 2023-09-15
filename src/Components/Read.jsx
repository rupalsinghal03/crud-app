import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './create.css'

function Read() {
    const [data, setData] = useState([])
    const [tabledark, settabledark] = useState('')
    const getData = () => {
        axios.get(`https://65041568c8869921ae247c17.mockapi.io/crud-operations`)
            .then((res) => {
                setData(res.data)
            })
    }


    const handleDelete = (id) => {
        axios.delete(`https://65041568c8869921ae247c17.mockapi.io/crud-operations/${id}`)
            .then(() => {
                getData();
            });
    }

    const setLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 table-section mt-4">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                onClick={() => {
                                    if (tabledark === 'table-dark') settabledark(" ")
                                    else settabledark("table-dark")
                                }} />
                        </div>
                        <h3 className='p-3'>List of Employees</h3>

                        <table className={`table ${tabledark}`}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            {data?.map((item, index) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr key={index}>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td><Link to='/update'><button className='btn-success' onClick={() => setLocalStorage(item.id, item.name, item.email)}>Update</button></Link></td>
                                                <td><button className='btn-danger' onClick={() => handleDelete(item.id)}>Delete</button></td>
                                            </tr>
                                        </tbody >
                                    </>
                                )
                            })}

                        </table>
                        <div className="back-btn p-2 col-12">
                            <Link to='/'><button className='p-2'>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read