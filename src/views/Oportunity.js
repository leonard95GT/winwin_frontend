import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Table from '../components/Tables/Oportunity'
import '../assets/css/content.css'

function Oportunity() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div id="content" className="row">
      <div className="feed p-3">
        <div className="row">
          <div className="col">
            <h2>Buscar Oportunidades</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{marginLeft: 0}}>
            <div className="row">
              <Table />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Oportunity;
