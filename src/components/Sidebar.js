import React, {useState} from 'react'
import '../assets/css/sidebar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo_2.png'
import ModalNewDemand from '../components/Modals/NewDemand'


const Sidebar = () => {
    const [selected, setSelected] = useState({
        items:{
            home: 'selected',
            search_bussiness: null,
            bussiness: null,
            payment: null,
            config: null,
            help: null
        }
    })

    const [modalDemand, setModalDemand] = useState(false)

    const alterSelected = (item, data) => {
        if(item === 'home') selected.items.payment = 'selected'
    }

    const isOpen = () => {
        setModalDemand(!modalDemand)
    }
    
    return (
        <div className='sidenav'>
            <Link id="logo" href=""><img src={Logo} alt="" width="90%"/></Link>
            <Link onClick={e => alterSelected('home' ,e.target.value)} value='selected' to="/" className={selected.items.home}>Home</Link>
            <Link to="/oportunidades" className={selected.items.search_bussiness}>Buscar Negócios</Link>
            <Link to="/negocios" className={selected.items.bussiness}>Negócios</Link>
            <Link to="/pagamentos" className={selected.items.payment}>Pagamentos</Link>
            <Link to="/configuracoes" className={selected.items.config}>Configurações</Link>
            <Link to="/ajuda" className={selected.items.help}>Ajuda</Link>

            <a className="button" onClick={() => isOpen()}>Comprar / Vender</a>

            <ModalNewDemand show={modalDemand} onHide={()=> isOpen()} />
        </div>
    )
}

export default Sidebar
