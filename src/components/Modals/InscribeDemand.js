import React, { useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import  '../../assets/css/modalInscribeDemand.css'
import api from '../../services/api'
 
const InscribeDemand = (props) => {
  const [demandData, setDemandData] = useState(props.demand)
  //const [segments, segSegments] = useState(props.segments)
  const [newProposal, setNewProposal] = useState({
    id_demand: demandData.id,
    amount: '',
    price:0,
    total_price: 0,
    owner_proposal_id: sessionStorage.getItem('company')
  })
  console.log(demandData)

  const saveProposal = () => {
    api.post('proposals', newProposal).then(newData => console.log(newData.data))
  }
    return (
        <Modal isOpen={props.show} toggle={props.onHide}  size='lg'>
            <ModalBody>
              <div class="row justify-content-md-center">
                <div class="col-12 text-center mb-5">
                  {demandData.type_demand ==='serviço'?
                  <h3 class="font-blue">Participar da Demanda - Serviço</h3>:
                  <h3 class="font-blue">Participar da Demanda - Produto</h3>
                }
                  
                </div>
                <div class="col-12">
                  <div className='row'>
                <div class="col-12">
                  <div class="row">
                    <div class="col-4">
                      
                    </div>
                    <div class="col-8">
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Título</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{demandData.title}</h6>

                      </div>
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Descrição</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{demandData.description}</h6>
                      </div>
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Categorias</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{demandData.id_segment}</h6>
                      </div>
                      {/* <div class="groupForm">
                        <h5 class="card-title font-purple">Sales Kit</h5>
                        <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                      </div> */}
                      <div class="groupForm">
                        <h5 class="card-title font-purple">Proposta</h5>
                        {demandData.type_demand !== 'serviço'?
                          <div className='row'>
                            <div className='col-4'>
                              <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                            </div>
                            <div className='col-4'>
                              <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                            </div>
                            <div className='col-4'>
                              <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                            </div>
                        </div>
                        :
                        <div className='row'>
                          <div className='col-4'>
                            <h6 class="card-subtitle mb-2 text-muted">service.title</h6>
                          </div>
                        </div>
}
                       
                      </div>
                
                      <button onClick={() => saveProposal()}>Participar</button>
                    </div>
                  </div>
                </div>
        

                  </div>
                </div>
          
              </div>
            </ModalBody>
        </Modal>
    )
}

export default InscribeDemand
