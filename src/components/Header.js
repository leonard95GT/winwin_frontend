import React from 'react'
import '../assets/css/header.css'
import Eu from '../assets/images/eu.jpg' 
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

const Header = () => {
    return (
        <div className="main">
            <div className="shadow p-3 mb-5 mr-5 bg-white rounded">
                <div className="row justify-content-end">
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <div className="dropdown">
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret color="white">
                                Leonardo Rene
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Configurações</DropdownItem>
                                <DropdownItem>Ajuda</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Sair</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        </div>
                        <div className="p-2 bd-highlight">
                            <img src={Eu} alt="Avatar" className="avatar" />
                        </div>
                        <div className="p-2 bd-highlight">
                            <div className="buttonGreen">Comprar / Vender</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
