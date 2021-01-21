import React, { useEffect, useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import  '../../assets/css/bussiness.css'
import api from '../../services/api'
const Oportunity = (props) => {

  const [segments, setSegments] = useState({data: []})
  const [newDemand, setNewDemand] = useState({
    id_company_owner: sessionStorage.getItem('company'),
    title: '',
    description: '',
    type_demand: 'produto',
    type_service: 'demanda',
    id_segment: 1
  })

  useEffect(() => {
    api.get('segments').then(data => {
      setSegments((prevState) => ({...prevState, data: data.data}))
    })

  }, [])

  const createDemand = demand => {
    console.log(newDemand)
    api.post('demands', demand).then(result => console.log(result.data))
    props.onHide()
  }

    return (
        <Modal isOpen={props.show} toggle={props.onHide}>
            <ModalBody>
              <div class="row justify-content-md-center">
                <div class="col-12 text-center mb-5">
                  <h3 class="font-blue">Nova Demanda</h3>
                </div>
                <div class="col-12">
                  <div class="row">
                  <div class="col-12">
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Qual o tipo de oportunidade</h5>
                        <select name="type_service" id="cars" value={newDemand.type_service} onChange={e => {
                          const dataInput = e.currentTarget.value; 
                          setNewDemand((prevState) => ({...prevState, type_service: dataInput}))
                        }}>
                          <option value="demanda">Demanda</option>
                          <option value="oferta">Oferta</option>
                        </select>
                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Qual o tipo de demanda</h5>
                        <select name="type_demand" value={newDemand.type_demand} onChange={e => {
                          const dataInput = e.currentTarget.value; 
                          setNewDemand((prevState) => ({...prevState, type_demand: dataInput}))
                        }}>
                          <option value="produto">Produto</option>
                          <option value="serviço">Serviço</option>
                        </select>

                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Título</h5>
                        <input type="text" name="title" value={newDemand.title} onChange={e => {
                          const dataInput = e.target.value; 
                          setNewDemand((prevState) => ({...prevState, title: dataInput}))
                        }} />
                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Descrição</h5>
                        <textarea name="description" value={newDemand.description} cols="30" rows="5" onChange={e => {
                          const dataInput = e.target.value; 
                          setNewDemand((prevState) => ({...prevState, description: dataInput}))
                        }} />
                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Segmento em atuação</h5>
                        <select name="id_segment" value={newDemand.id_segment} onChange={e => {
                          const dataInput = e.currentTarget.value; 
                          setNewDemand((prevState) => ({...prevState, id_segment: dataInput}))
                        }}>
                          {segments.data.map((d,i) => (
                            <option key={i} value={d.id}>{d.name}</option>
                          ))}
                        </select>

                      </div>
                      <div class="groupForm">
                        <h5 class="card-subtitle mb-2 text-muted">Serviços prestados</h5>
                        <select name="id_segment" id="cars">
                          {segments.data.map((d,i) => (
                            <option key = {i} value={d.id}>{d.name}</option>
                          ))}
                        </select>
                      </div>

                      <button onClick={() => createDemand(newDemand)}>Cadastrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
        </Modal>
    )
}

export default Oportunity
