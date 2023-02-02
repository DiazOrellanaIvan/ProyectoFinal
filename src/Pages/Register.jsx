import './Register.css';

const Register= () => {
    return(
        <>
            <div className='Content'>
                <div className='CenterRegister'>
                    <h1 className='TitleRegister'>Sing In</h1>
                    <form method='post'>
                        <div className='text'>
                            <input type="text" required />
                            <span></span>
                            <label>Full Name</label>
                        </div>
                        <div className='text'>
                            <input type="text" required />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className='text'>
                            <input type="password" required/>
                            <span></span>
                            <label>Password</label>
                        </div>
                        <input type="submit" value="Sing In"/>
                    </form>
                </div>
            </div>
        </>
    );
} 

export default Register;