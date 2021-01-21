import React , {useState} from 'react'
import '../../assets/css/bussiness_table.css'
import Modal from '../../components/Modals/Oportunity'

const Table = () => {

    const [modal, setModal] = useState(false)

    const isOpen = () => {
        setModal(!modal)
      }


    return (
        <div>
            <div className="row mt-4">
                <div className="col-6">
                    Negócios para aprovação
                </div>
                <div className="col-6">
                   
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Empresa</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Data de criação</th>
                        <th scope="col">Oportunidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="rows">
                        <td>Claro</td>
                        <td>Tecnologia</td>
                        <td>10/03/2001</td>
                        <td>bla bla bla bla bla</td>
                        <td><div class="buttonApprove"><a onClick={() => isOpen()}>Aprovar</a></div></td>
                        <td><div class="buttonCancel"><a onClick={() => isOpen()}>Recusar</a></div></td>
                        <td><div class="buttonPurple"><a onClick={() => isOpen()}>Visualizar</a></div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
            <Modal show={modal} onHide={() => isOpen()} />

        </div>

    )
}

export default Table
