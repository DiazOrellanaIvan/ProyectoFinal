import './Login.css';
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
        <div className='ContentLogin'>
            <div className='CenterLogin'>
                <h1>Login</h1>
                <form method='post'>
                    <div className='text'>
                        <input type="text" required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className='text'>
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className='password'><Link to='/NotFound' className='LinkLogin'>Olvidaste tu contaseña?</Link></div>
                    <input type="submit" value="Login"/>
                    <div className='singnupLink'>
                        No tienes una cuenta? <Link to='/Register'>Registrate</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    );    
}

export default Login; 