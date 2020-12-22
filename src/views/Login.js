import React, {useState} from 'react'
import background from '../assets/images/bussiness.jpg'
import '../assets/css/login.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Login({history}) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const session = () => {
        console.log(history)
        history.push({
            pathname: `${process.env.PUBLIC_URL}/`,
        });
    }
    return (
        <div className="Login">
            <div className="row">
                <div id="form_part" className="col" >
                    <div className='login'>
                        <p className="title-logo"><img src={logo}/>WIN WIN</p>
                    </div>
                    
                    <div className='form'>
                        <div className='titleScreen'>
                            <h1><b>Login</b></h1>
                        </div>

                        <div className='divisor'>
                            <p>Email</p>
                            <input onChange={e => setEmail(e.target.value)} placeholder="exemplo@email.com"/>
                        </div>
                        <div className='divisor_two'>
                            <p>Senha</p>
                            <input type='password' onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha"/>
                        </div>

                    </div>
                    <div onClick={() => session()} className="button"><p>Login</p></div>
                </div>
                <div className="col-sm-6" style={{padding:0}}>
                    <img className='bg' src={background}/>
                    <div class="capa">
                        <div className="title-background">
                            <b>Chegou a <br/> plataforma <br/> para potencializar <br/> seu negócio</b>
                        </div>
                        <div className="subtitle-background">
                            Chegou a plataforma para potencializar seu negócio
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
