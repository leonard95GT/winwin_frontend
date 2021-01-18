import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import  '../../assets/css/bussiness.css'
 
const Oportunity = (props) => {
    return (
        <Modal isOpen={props.show} toggle={props.onHide}>
            <ModalBody>
              <div class="row justify-content-md-center">
                <div class="col-12 text-center mb-5">
                  <h3 class="font-blue">Nova Demanda</h3>
                </div>
                <form action="create-service" method="post">
                <div class="col-12">
                  <div class="row">
                  <div class="col-12">
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Qual o tipo de oportunidade</h5>
                        <select name="type_service" id="cars">
                          <option value="demanda">Demanda</option>
                          <option value="oferta">Oferta</option>
                        </select>
                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Qual o tipo de demanda</h5>
                        <select name="type_demand" id="cars">
                          <option value="produto">Produto</option>
                          <option value="serviço">Serviço</option>
                        </select>

                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Título</h5>
                        <input type="text" name="title" />
                        <input type="text" name="owner_id" hidden value="1" />
                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Descrição</h5>
                        <textarea name="description" id="" cols="30" rows="5"></textarea>
                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Segmento em atuação</h5>
                        <select name="id_segment" id="cars">
                          <option value="1">Produto</option>
                          <option value="2">Serviço</option>
                        </select>

                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Serviços prestados</h5>
                        <select name="id_service" id="cars">
                          <option value="1">Produto</option>
                          <option value="2">Serviço</option>
                        </select>

                      </div>

                      <button type="submit">Cadastrar</button>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </ModalBody>
        </Modal>
    )
}

export default Oportunity
