import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import Image from '../../assets/images/conquista.png'
import  '../../assets/css/bussiness.css'
 
const Oportunity = (props) => {
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
                  <h5 class="font-purple">Título</h5>
                </div>
                <div class="row">
                  <p>ajnkjfansdfjkadsnfjkas</p>
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
