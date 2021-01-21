import React , {useEffect, useState} from 'react'
import '../../assets/css/bussiness_table.css'
import ModalParticipate from '../../components/Modals/InscribeDemand'
import api from '../../services/api'

const Table = () => {
    const [oportunities, setOportunities] = useState({data: []})
    const [segments, setSegments] = useState({data: []})
    const [companies, setCompanies] = useState({data: []})
    const [demand, setDemand] = useState()
  
    const [modal, setModal] = useState(false)

    const isOpen = () => {
        setModal(!modal)
      }

      const demandData = demand => {

      }

      useEffect(() => {
          api.get('oportunities').then(list => {
              if(list.status === 200) setOportunities((prevState) => ({...prevState, data: list.data}))
          })
          api.get('segments').then(data => {
            setSegments((prevState) => ({...prevState, data: data.data}))
          })
          api.get('companies').then(data => {
            setCompanies((prevState) => ({...prevState, data: data.data}))
          })
      
      },[])


    return (
        <div>
            <div className="row mb-5">
                <div className="col-6">
                    Oportunidades disponíveis
                </div>
                <div className="col-6">
                    Filtros
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
                {oportunities.data.map((d, i) => (
                    <tr class="rows">
                        {companies.data.map((dd, i) => {
                            if(d.id_company_owner === dd.id) return (<td>{dd.fantasy_name}</td>)
                        }) }
                        {segments.data.map((dd, i) => {
                            if(d.id_segment === dd.id) return (<td>{dd.name}</td>)
                        }) }                       
                        <td>{d.created_at}</td>
                        <td>{d.description}</td>
                        <td><div class="buttonPurple"><a onClick={() => {demandData(d);isOpen()}}>Participar</a></div></td>
                    </tr>
                ))}
                
                {/* <tr class="rows">
                  <td>Claro</td>
                  <td>Tecnologia</td>
                  <td>10/03/2001</td>
                  <td>bla bla bla bla bla</td>
                  <td><div class="buttonPurple"><a data-toggle="modal" data-target="#ganha">Visualizar</a></div></td>
                </tr> */}

              </tbody>
            </table>
                </div>
            </div>
            {/* <ModalParticipate show={modal} demand={demand} segments={segments} onHide={() => isOpen()}/> */}
        </div>

    )
}

export default Table
