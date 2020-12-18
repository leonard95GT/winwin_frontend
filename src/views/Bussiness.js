import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Table from '../components/Table'
import '../assets/css/content.css'
import Modal from '../components/Modals/Oportunity'

function Bussiness() {
  return (
    <div className="Bussiness">
      <Sidebar />
      <Header />
      <div id="content" className="row">
      <div className="feed p-3">
        <div className="row">
          <div className="col-12">
            <h2>Negócios</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8" style={{marginLeft: 0}}>
            <div className="row">
              <Table />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Modal />
    </div>
  );
}

export default Bussiness;
