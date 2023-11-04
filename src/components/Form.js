import { useState } from 'react';
 
export default function Form() {
 
    // States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
 
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
 
    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
 
    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h3>User {name} successfully registered!!</h3>
            </div>
        );
    };
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h3>Please enter all the fields</h3>
            </div>
        );
    };
 
 return (
  <div className="Login">
    <div className="title">
    <h2>User Registration</h2 >
    </div>
 
  {/* Calling to the methods */}
    <div className="messages">
       {errorMessage()}
       {successMessage()}
    </div>
<form>
    <div class="form-control">
 <label>User Name</label>
 <input onChange={handleName} className="input" value={name} type="text" placeholder="Enter your name"/>
    </div>
    <div class="form-control">
<label className="label">Email</label>
<input onChange={handleEmail} className="input" value={email} type="email" placeholder="Enter your email"/> 
    </div>
    <div class="form-control">
<label className="label">Password</label>
<input onChange={handlePassword} className="input" value={password} type="password" placeholder="Enter your password"/>
    </div>
<button onClick={handleSubmit} className="btn" type="submit">Submit</button>
</form>
</div >
    );
}