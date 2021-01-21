import React , {useEffect, useState} from 'react'
import '../../assets/css/bussiness_table.css'
import Modal from '../../components/Modals/Oportunity'
import api from '../../services/api'

const Table = () => {
    const [oportunity, setOportunity] = useState({data: []})
    const [segments, setSegments] = useState({data: []})
    const [companies, setCompanies] = useState({data: []})
    const [item, setItem] = useState()
  
    const [modal, setModal] = useState(false)

    const isOpen = () => {
       // if(item) setItem(item)
        setModal(!modal)
    }

    const changeItem = item => {
      console.log(item)
      setItem(item)
    }

      useEffect(() => {
        api.get('my-services').then(services => {
          setOportunity((prevState) => ({...prevState, data: services.data}))
        }).catch(error => console.log(error))

          api.get('segments').then(data => {
            setSegments((prevState) => ({...prevState, data: data.data}))
          })
          api.get('companies').then(data => {
            setCompanies((prevState) => ({...prevState, data: data.data}))
          })

      }, [])


    return (
        <div>
            <div className="row mt-4">
                <div className="col-6">
                    Negócios conquistados
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Empresa</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Data de criação</th>
                        <th scope="col">Oportunidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {oportunity.data.map((d, i) => (
                        <tr className="rows" key={i}>
                                {companies.data.map((dd, i) => {
                                    if(d.id_company_owner === dd.id) return (<td key={i}> {dd.fantasy_name}</td>)
                                }) }
                                {segments.data.map((dd, i) => {
                                    if(d.id_segment === dd.id) return (<td key={i}>{dd.name}</td>)
                                }) }                       
                          <td>{d.created_at}</td>
                          <td>{d.description}</td>
                          <td><div className="buttonPurple"><a onClick={() => { changeItem(d.id);isOpen()}}>Visualizar</a></div></td>
                        </tr>                
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
            <Modal show={modal} oportunity={item} onHide={() => isOpen()} />

        </div>

    )
}

export default Table
