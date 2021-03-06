import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth(props) {
    const { mode } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [apiMessage, setAPIMessage] = useState()
    const [disableButton, setDisableButton] = useState(false);
    
    let history = useNavigate();

    const loginUser = async () => {
        setDisableButton(true);
        await axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', {
            email: email,
            password: password  
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user._id);
            setAPIMessage({
                flag: 0,
                message: "Login Successful"
            })
            history("/home");
        }).catch((err) => {
            setAPIMessage({
                flag: 1,
                message: "Please re-check your credentials!"
            })
        })
        setDisableButton(false);
    }

    return (
        <section style={{color: mode==='dark'?'white':'black'}}>
            <div className="mt-5 row">
                <h1 className="font-weight-bold w-100">My To-Do List Application</h1>
            </div>
            <div className="container mt-5">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header" style={{backgroundColor: mode==='dark'?'rgb(36 74 104)':'white',color: mode==='dark'?'white':'black'}}>
                            <h3 >Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input 
                                    type="text" 
                                    value = {email} 
                                    className="form-control" 
                                    placeholder="email" 
                                    onChange = {(e) => {setEmail(e.target.value)}} 
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                    type="password" 
                                    value = {password} 
                                    className="form-control" 
                                    placeholder="password" 
                                    onChange = {(e) => {setPassword(e.target.value)}}
                                />
                            </div>
                            {(apiMessage) &&
                                <p className={apiMessage.flag ? "text-danger" : "text-success"}>{apiMessage.message}</p>
                            }
                            <div className="form-group">
                                <button 
                                    className="btn btn-primary float-right login_btn"
                                    onClick={() => {loginUser()}}
                                    disabled = {disableButton}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="/register">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}