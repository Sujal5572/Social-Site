import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">

                    <h1>Explore With Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est quasi doloremque velit commodi, tempore quaerat facere autem officia, numquam, necessitatibus quos a corporis eveniet pariatur. Earum perspiciatis consectetur ipsam.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form >
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="text" placeholder ="Name"/>
                        <button>Register</button>
                    </form>
                </div>
                
            </div>
        </div>



    );
};

export default Register;