import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Card from '../components/Card'
import '../assets/css/content.css'
import '../assets/css/content.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div id="content" className="row">
      <div className="feed p-3">
        <div className="row">
          <div className="col">
            <h2>Feed</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8" style={{marginLeft: 0}}>
            <div className="row">
              <Card />
            </div>
          </div>
          <div className="col-4" style={{paddingLeft:40}}>
            <div className="row">
              <div className="col-sm-9 shadow p-3 mb-5 ml-5 mr-2 bg-white rounded">
                1
              </div>
              <div className="col-sm-9 shadow p-3 mb-5 ml-5 mr-2 bg-white rounded">
                1
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
