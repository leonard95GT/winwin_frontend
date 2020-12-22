import React from 'react'
import background from '../assets/images/bussiness.jpg'
import '../assets/css/login.css'

function Login() {
    return (
        <div className="Login">
            <div className="row">
                <div className="col">
                    
                </div>
                <div className="col-sm-6" style={{padding:0}}>
                    <img className='bg' src={background}/>
                    <div class="capa">
                        <div className="title-background">
                            Chegou a plataforma para potencializar o seu negócio
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
