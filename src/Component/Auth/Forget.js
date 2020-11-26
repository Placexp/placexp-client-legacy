import React from 'react'
import './forgot.css';

function Forgot() {
    return (
       
        <div className="forgot" >
            <form className="forgot_form">
                <h1>Reset Password</h1>
                <p>Enter your Vit email to reset your password?</p>
                <input type="email" placeholder="Enter your email" />
                <button>SUBMIT</button>
            </form>
            <div className="footer">
                <p>@Copyright of PlaceXp 2020</p>
            </div>
        </div>
   
    )
}

export default Forgot