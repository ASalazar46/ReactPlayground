import './index.css';
import { PageHeader } from './components/PageHeader';
import { DataAverager } from './components/DataAverager';
import { Graph } from './components/Graph';
import { Map } from './components/Map';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="grid grid-rows-10 grid-cols-12">
        <div className="grid row-start-1 col-start-1 row-end-11 col-end-2 bg-red-100 mr-4">
          <Sidebar />
        </div>
        <div className="grid row-start-1 col-start-2 row-end-11 col-end-13">
          <div className="grid row-start-1 col-start-1 row-end-2 col-end-11 place-content-center bg-yellow-100 mb-4">
            <PageHeader />
          </div>
          <div className="grid row-start-2 col-start-1 row-end-11 col-end-11">
            <div className="grid row-start-1 col-start-1 row-end-10 col-end-4 bg-green-100 mr-4">
              <DataAverager />
            </div>
            <div className="grid row-start-1 col-start-4 row-end-10 col-end-11">
              <div className="grid row-start-1 col-start-1 row-end-6 col-end-8 bg-blue-100">
                <Graph />
              </div>
              <div className="grid row-start-6 col-start-1 row-end-10 col-end-8 bg-indigo-100 mt-4">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
