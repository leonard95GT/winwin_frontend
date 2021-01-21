import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Table from '../components/Tables/Bussiness'
import TableWin from '../components/Tables/BussinessGet'
import '../assets/css/content.css'

function Bussiness() {



  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div id="content" className="row">
      <div className="feed p-3">
        <div className="row">
          <div className="col">
            <h2>Negócios</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{marginLeft: 0}}>
            <div className="row mb-3">
              <Table />
            </div>
            <div className="row">
              <TableWin />
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Bussiness;
