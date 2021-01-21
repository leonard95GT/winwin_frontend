import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Table from '../components/Tables/Payment'
import '../assets/css/content.css'
import '../assets/css/content.css'

function Payment() {
  return (
    <div className="App">
    <Sidebar />
    <Header />
    <div id="content" className="row">
    <div className="feed p-3">
      <div className="row">
        <div className="col">
          <h2>Pagamentos</h2>
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

export default Payment;
