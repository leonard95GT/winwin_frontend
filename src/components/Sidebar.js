import React from 'react'
import '../assets/css/sidebar.css'

const Sidebar = () => {
    
    return (
        <div className='sidenav'>
            <a className='selected'>Home</a>
            <a>Buscar Negócios</a>
            <a>Negócios</a>
            <a>Pagamentos</a>
            <a>Configurações</a>
            <a>Ajuda</a>
            <a className="button" data-toggle="modal" data-target="#newDemand">Cadastrar uma demanda/oferta</a>
        </div>
    )
}

export default Sidebar
