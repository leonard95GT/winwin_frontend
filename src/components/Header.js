import React, {useState} from 'react'
import '../assets/css/header.css'
import Eu from '../assets/images/eu.jpg' 
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { logout } from "../services/auth";
import ModalNewDemand from '../components/Modals/NewDemand'
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory()

    const logOut = () => {
        logout()
        history.push(`${process.env.PUBLIC_URL}/login`);
    }

    const [modalDemand, setModalDemand] = useState(false)
    const isOpen = () => {
        setModalDemand(!modalDemand)
    }


    return (
        <div className="main">
            <div className="shadow p-3 mb-5 mr-5 bg-white rounded">
                <div className="row justify-content-end">
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <div className="dropdown">
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret color="white">
                                {sessionStorage.getItem('name')}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Configurações</DropdownItem>
                                <DropdownItem>Ajuda</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => logOut()}>
                                        Sair  
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        </div>
                        <div className="p-2 bd-highlight">
                            <img src={Eu} alt="Avatar" className="avatar" />
                        </div>
                        <div className="p-2 bd-highlight">
                            <div className="buttonGreen" onClick={() => isOpen()}>Comprar / Vender</div>
                        </div>
                    </div>
                </div>
            </div>
        <ModalNewDemand show={modalDemand} onHide={()=> isOpen()} />
        </div>
    )
}

export default Header
