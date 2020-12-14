import React from 'react'
import '../assets/css/header.css'


const Header = () => {
    return (
        <div className="main">
            <div className="shadow p-3 mb-5 mr-5 bg-white rounded">
                <div className="row justify-content-end">
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Leonardo Rene
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item">Logout</a>
                            </div>
                        </div>
                        <div className="p-2 bd-highlight">
                            <img alt="Avatar" className="avatar" />
                        </div>
                        <div className="p-2 bd-highlight"><a data-toggle="modal" data-target="#newDemand" className="buttonGreen">Cadastrar uma demanda/oferta</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
