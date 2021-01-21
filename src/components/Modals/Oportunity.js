import React, {useEffect, useState} from 'react'
import { Modal, ModalBody } from 'reactstrap'
import Image from '../../assets/images/conquista.png'
import  '../../assets/css/bussiness.css'
import api from '../../services/api'

 
const Oportunity = (props) => {
  const [oportunity, setOportunity] = useState()
  let item
  useEffect(() => {
   item = props.oportunity
    console.log(props)
    api.get('demands/'+ props.oportunity).then(oportunityData => {
      console.log(oportunityData.data)
      setOportunity(oportunityData.data)
    })
  },[oportunity])
    return (
        <Modal isOpen={props.show} toggle={props.onHide} size="lg">
            
            <ModalBody>
                <div class="row">
                    <div class="col-12">
                        <h2 class="font-blue text-center">Oportunidade conquistada Parabéns!!!!</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
              <div class="col-7" style={{textAlign:'center'}}>
                <img  width="450px" src={Image} alt="" />
              </div>
              <div class="col-7">
                <div class="row">
                  <h5 class="font-purple">{oportunity?oportunity.title : ''}</h5>
                </div>
                <div class="row">
                  <p>{oportunity?oportunity.description : ''}</p>
                </div>
                <div class="row">
                  <h5 class="font-purple">Valor da conquista</h5>
                </div>
                <div class="row">
                  <p>Qual o valor total da conquista: R$ 3.000,00</p>
                </div>    
              </div>
            </div>
            </ModalBody>
        </Modal>
    )
}

export default Oportunity
