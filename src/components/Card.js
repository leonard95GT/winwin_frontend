import React, {useEffect, useState} from 'react'
import '../assets/css/card.css'
import api from '../services/api'
import ModalParticipate from './Modals/InscribeDemand'

const Card = (props) => {
  const [segments, setSegments] = useState({data: []})
  const [companies, setCompanies] = useState({data: []})
  const [demand, setDemand] = useState(props.demand)
  const [modal, setModal] = useState(false)

  const toogleModal = () => {
    setModal(!modal)
  }
  
  useEffect(() => {
     api.get('segments').then(data => {
      setSegments((prevState) => ({...prevState, data: data.data}))
    })
    api.get('companies').then(data => {
      setCompanies((prevState) => ({...prevState, data: data.data}))
    })
  }, [])
 
    return (
        <div className="card shadow p-3 mb-5 bg-white">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title title font-blue" style={{textTransform: "capitalize"}}>{demand.type_service}</h5>
                  <h6 className="card-subtitle mb-2 subtitle font-purple" style={{textTransform: "capitalize"}}>{demand.type_demand}</h6>
                </div>    
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title">
                    <svg className="bd-placeholder-img rounded-circle" width="70" height="70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#777"></rect>
                      <text x="50%" y="50%" fill="#777" dy=".3em">
                        140x140
                      </text>
                    </svg>
                  </h5>
                  {companies.data.map((d,i) => {
                    if(d.id === demand.id_segment){
                      return (<h6 key={i} className="card-subtitle mb-2 text-muted">{d.fantasy_name}</h6>)
                    }
                  })}

                </div>    
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title font-purple">Título</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{demand.title}</h6>
                </div>
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title font-purple">Descrição</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {props.demand.description}
                  </h6>
                </div>
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title font-purple">Categorias</h5>
                  {segments.data.map((d,i) => {
                    if(d.id === demand.id_segment){
                      return ( <h6 key={i} className="card-subtitle mb-2 text-muted">{d.name}</h6>)
                    }
                  })}
                 
                </div>
              </div>  
              <div className="col-12">
                <div className="card-body">
                  <a className="buttonCard" onClick={() => toogleModal()}>Participar</a>
                </div>
              </div>                    
            </div>
          </div>
        </div>
        <ModalParticipate show={modal} demand={demand} segments={segments} onHide={() => toogleModal()}/>
      </div>
    )
}

export default Card
