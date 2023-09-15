import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div>
            <footer id="mdb-footer" className="mt-5" >
                <div className="text-center p-3" >© 2023
                    Copyright:
                     <Link to='/'><strong> Developed by Rupal Singhal</strong></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer