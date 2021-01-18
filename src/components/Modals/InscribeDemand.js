import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import  '../../assets/css/modalInscribeDemand.css'
 
const InscribeDemand = (props) => {
    return (
        <Modal isOpen={props.show} toggle={props.onHide}  size='lg'>
            <ModalBody>
              <div class="row justify-content-md-center">
                <div class="col-12 text-center mb-5">
                  <h3 class="font-blue">Participar da Demanda - Serviço</h3>
                </div>
                <form action="create-service">
                <div class="col-12">
                  <div className='row'>
                  <form action="" method="post">
                <div class="col-12">
                  <div class="row">
                    <div class="col-4">
                      
                    </div>
                    <div class="col-8">
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Título</h5>
                        <h6 class="card-subtitle mb-2 text-muted">service.title</h6>

                      </div>
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Descrição</h5>
                        <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                      </div>
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Categorias</h5>
                        <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                      </div>
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Sales Kit</h5>
                        <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                      </div>
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Proposta</h5>
                        <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                      </div>
                
                      <button type="submit">Participar</button>
                    </div>
                  </div>
                </div>
              </form>

                  </div>
                </div>
                </form>
              </div>
            </ModalBody>
        </Modal>
    )
}

export default InscribeDemand
