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
        <div className="grid row-start-1 col-start-1 row-end-11 col-end-2 mr-2">
          <Sidebar />
        </div>
        <div className="grid row-start-1 col-start-2 row-end-11 col-end-13">
          <div className="grid row-start-1 col-start-1 row-end-2 col-end-11 place-content-center mb-2 mr-2">
            <PageHeader />
          </div>
          <div className="grid row-start-2 col-start-1 row-end-11 col-end-11 ml-2">
            <div className="grid row-start-1 col-start-1 row-end-10 col-end-6 mr-2">
              <DataAverager />
            </div>
            <div className="grid row-start-1 col-start-6 row-end-10 col-end-11 mr-4">
              <div className="grid row-start-1 col-start-1 row-end-6 col-end-8">
                <Graph />
              </div>
              <div className="grid row-start-6 col-start-1 row-end-10 col-end-8 mt-2">
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
