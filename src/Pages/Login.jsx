import './Login.css';
import {useNavigate} from 'react-router';
import axios from 'axios';
import {useState} from "react";

const Login = () => {

    const [inputs, setInputs] = useState({
        correo: "",
        contraseña: ""
    });

    const [mensaje, setMensaje] = useState();
 
    const [loading, setLoading] = useState(false);

    const {correo, contraseña} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Hola");
        if ((correo !== "" && contraseña !== "")) {
            const Usuario = {
                correo,
                contraseña,
            };
            setLoading(true);
            await axios     
                .post("http://localhost:4000/login", Usuario)
                .then(({data}) => { 
                    setMensaje(data.mensaje);
                    setInputs({correo: "", contraseña: ""});
                    setTimeout(() => {
                        setMensaje("");
                        navigate(`/Home/${data?.usuario.id}`);
                        setLoading(false);
                    }, 1500)
                })
                .catch((error) => {
                    console.error(error)
                    setMensaje('Hubo un error')
                    setTimeout(() => {
                        setMensaje("");
                        setLoading(false);
                    }, 1500)
                });
        }
    }

    const navigate = useNavigate()

    return(
        <>
            <div className='ContentLogin'>
                <div className='CenterLogin'>
                    <h1>Login</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='text'>
                            <input onChange={(e) => onChange(e)} value={correo} name="correo" id="correo" type="email" autoComplete="off"/>
                            <span></span>
                            <label>Email</label> 
                        </div>
                        <div className='text'>
                            <input onChange={(e) => onChange(e)} value={contraseña} name="contraseña" id="contraseña" type="text" autoComplete="off"/>
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className='password'>Olvidaste tu contaseña?</div>
                        <button type="submit" className='LinkLogin'>Login</button>
                        <div className='singnupLink'>
                            <p className='iniciarsesionlogin'>No tienes una cuenta? 
                                <b onClick={() => navigate("/")}> Registrate</b> 
                            </p>
                        </div>
                    </form>
                </div>
            </div>
                </>
            );    
}

export default Login




























































// import './Login.css';
// // import {Link} from "react-router-dom";
// import {useState} from "react";
// import {login} from "../Pages/Service/apiCall";

// const Login = () => {
    
//     const [formValues, setFormValues] = useState ({
//         email:"",    
//         password:""
//     });

//     const handleChange = (event) => {
//         setFormValues({
//             ...formValues,
//             [event.target.name]: event.target.value
//         })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const getUser = () => {
//             login(formValues).then(() => {
//                 console.log("Logueado");
//             }).catch((error) => alert("Error al loguear"));
//         }
//         getUser();
//     }
    
//     return(
//         <>
//         <div className='ContentLogin'>
//             <div className='CenterLogin'>
//                 <h1>Login</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='text'>
//                         <input name='email' type="text" value={formValues.email} onChange={handleChange} required />
//                         <span></span>
//                         <label>Email</label> 
//                     </div>
//                     <div className='text'>
//                         <input name='password' type="text" value={formValues.password} onChange={handleChange} required/>
//                         <span></span>
//                         <label>Password</label>
//                     </div>
//                     <div className='password'>Olvidaste tu contaseña?</div>
//                     <button className='LinkLogin' onClick={handleSubmit}>Login</button>
//                     <div className='singnupLink'>
//                         No tienes una cuenta? Registrate
//                     </div>
//                 </form>
//             </div>
//         </div>
//         </>
//     );    
// }

// export default Login; 