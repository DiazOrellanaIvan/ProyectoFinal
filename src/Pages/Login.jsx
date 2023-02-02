import './Login.css';

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
                    <div className='password'>Olvidaste tu contaseña?</div>
                    <input type="submit" value="Login"/>
                    <div className='singnupLink'>
                        No tienes una cuenta? <a href="#">Registrate</a>
                    </div>
                </form>
            </div>
        </div>
        </>
    );    
}

export default Login; 