import React from 'react'
import '../assets/css/card.css'

const Card = () => {
    return (
        <div className="card shadow p-3 mb-5 bg-white">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title title font-blue" style={{textTransform: "capitalize"}}>Type_service</h5>
                  <h6 className="card-subtitle mb-2 subtitle font-purple" style={{textTransform: "capitalize"}}>type_demand</h6>
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
                  <h6 className="card-subtitle mb-2 text-muted">Claro Brasil</h6>
                </div>    
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title font-purple">Título</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Title</h6>
                </div>
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title font-purple">Descrição</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Description
                  </h6>
                </div>
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title font-purple">Categorias</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                </div>
              </div>  
              <div className="col-12">
                <div className="card-body">
                  <a data-toggle="modal" className="buttonCard">Participar</a>
                </div>
              </div>                    
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card
