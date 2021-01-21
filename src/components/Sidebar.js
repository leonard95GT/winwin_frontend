import React, {useEffect, useState} from 'react'
import '../assets/css/sidebar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo_2.png'
import ModalNewDemand from '../components/Modals/NewDemand'


const Sidebar = () => {
    const [selected, setSelected] = useState({
            home: '',
            search_bussiness: '',
            bussiness: '',
            payment: '',
            config: '',
            help: ''
    })

    const [modalDemand, setModalDemand] = useState(false)

    const alterSelected = (item, data) => {
        console.log(item)
        console.log(data)
        if(item === 'home'){
            setSelected((prevState) => ({...prevState, 
                home: 'selected',
                search_bussiness: '',
                bussiness: '',
                payment: '',
                config: '',
                help: ''        
            }))
        }else if(item === 'oportuniy'){
            setSelected((prevState) => ({...prevState, 
                home: '',
                search_bussiness: 'selected',
                bussiness: '',
                payment: '',
                config: '',
                help: ''        
            }))
        } else if(item === 'bussiness'){
            setSelected((prevState) => ({...prevState, 
                home: '',
                search_bussiness: '',
                bussiness: 'selected',
                payment: '',
                config: '',
                help: ''        
            }))
        }else if(item === 'payment'){
            setSelected((prevState) => ({...prevState, 
                home: '',
                search_bussiness: '',
                bussiness: '',
                payment: 'selected',
                config: '',
                help: ''        
            }))
        }else if(item === 'config'){
            setSelected((prevState) => ({...prevState, 
                home: '',
                search_bussiness: '',
                bussiness: '',
                payment: '',
                config: 'selected',
                help: ''        
            }))
        }else if(item === 'help'){
            setSelected((prevState) => ({...prevState, 
                home: '',
                search_bussiness: '',
                bussiness: '',
                payment: '',
                config: '',
                help: 'selected'        
            }))
        } 

        console.log(selected)
    }


    const isOpen = () => {
        setModalDemand(!modalDemand)
    }
    
    return (
        <div className='sidenav'>
            <Link id="logo" href=""><img src={Logo} alt="" width="90%"/></Link>
            <Link onClick={e => alterSelected('home' ,e.target.value)} value='selected' to="/" className={selected.home}>Home</Link>
            <Link onClick={e => alterSelected('oportuniy' ,e.target.value)} value='selected' to="/oportunidades" className={selected.search_bussiness}>Buscar Negócios</Link>
            <Link onClick={e => alterSelected('bussiness' ,e.target.value)} value='selected' to="/negocios" className={selected.bussiness}>Negócios</Link>
            <Link onClick={e => alterSelected('payment' ,e.target.value)} value='selected' to="/pagamentos" className={selected.payment}>Pagamentos</Link>
            <Link onClick={e => alterSelected('config' ,e.target.value)} value='selected' to="/configuracoes" className={selected.config}>Configurações</Link>
            <Link onClick={e => alterSelected('help' ,e.target.value)} value='selected' to="/ajuda" className={selected.help}>Ajuda</Link>
            <a className="button" onClick={() => isOpen()}>Comprar / Vender</a>

            <ModalNewDemand show={modalDemand} onHide={()=> isOpen()} />
        </div>
    )
}

export default Sidebar
