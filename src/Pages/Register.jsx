import './Register.css';
import {useNavigate} from 'react-router';
import axios from 'axios';
import {useState} from "react";

const Register = () => {

    const [inputs, setInputs] = useState({
        correo: "",
        nombre: "",
        contraseña: ""
    });

    const [mensaje, setMensaje] = useState();
 
    const [loading, setLoading] = useState(false);

    const {correo, nombre, contraseña} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs.contraseña);
        if ((nombre !== "" && correo !== "" && contraseña !== "")) {
            const Usuario = {
                nombre,
                correo,
                contraseña,
            };
            setLoading(true);
            await axios     
                .post("http://localhost:4000/register", Usuario)
                .then(({data}) => { 
                    setMensaje(data.mensaje);
                    setInputs({correo: "", nombre: "", contraseña: ""});
                    setTimeout(() => {
                        setMensaje("");
                        navigate('/login');
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
        <div className='Content'>
            <div className='CenterRegister'>
                <h1 className='TitleRegister'>Registrate</h1>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='text'>
                        <input onChange={(e) => onChange(e)} value={inputs.nombre} name="nombre" id="nombre" type="text" autoComplete="off" />
                        <span></span>
                        <label>Nombre</label>
                    </div>
                    <div className='text'>
                        <input onChange={(e) => onChange(e)} value={inputs.correo} name="correo" id="correo" type="email" autoComplete="off" />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className='text'>
                        <input onChange={(e) => onChange(e)} name="constraseña" id="contraseña" type="password" autoComplete="off"/>
                        <span></span>
                        <label>Contraseña</label>
                    </div>
                    <button type='submit' className='BotonRegister'>{loading ? "Cargando..." : "Registrarme"}</button>
                        <p className='textRegister'>Ya tienes una cuenta? 
                            <b onClick={() => navigate('/login')}> Inicia Sesión</b>
                        </p>
                </form>
            </div>
        </div>

        {mensaje && <div className='mensajeclase'>{mensaje}</div> }
        </>
    );
}

export default Register;

























































































// import './Register.css';
// // import {Link} from "react-router-dom";
// import {register} from "../Pages/Service/apiCall";
// import {useState} from "react";

// const Register= () => {

//     const [formValues, setFormValues] = useState ({
//         firstname:"",
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
//         const saveUser = () => {
//             register(formValues).then(() => {
//                 console.log("Registrado");
//             }).catch((error) => alert("Error al registrar"));
//         }
//         saveUser();
//     }

//     return(
//         <>
//             <div className='Content'>
//                 <div className='CenterRegister'>
//                     <h1 className='TitleRegister'>Sing In</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className='text'>
//                             <input name='firstname' type="text" value={formValues.firstname} onChange={handleChange} required />
//                             <span></span>
//                             <label>Firstname</label>
//                         </div>
//                         <div className='text'>
//                             <input name='email' type="text" value={formValues.email} onChange={handleChange} required />
//                             <span></span>
//                             <label>Email</label>
//                         </div>
//                         <div className='text'>
//                             <input name='password' type="password" value={formValues.password} onChange={handleChange} required/>
//                             <span></span>
//                             <label>Password</label>
//                         </div>
//                         <button className='BotonRegister'>Sing In</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// } 

// export default Register;