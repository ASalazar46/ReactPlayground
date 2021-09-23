import './App.css';
import { PageHeader } from './components/PageHeader';
import { DataAverager } from './components/DataAverager';
import { Graph } from './components/Graph';
import { Map } from './components/Map';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div class="grid grid-flow-row grid-flow-col grid-rows-10 grid-cols-10 gap-2">
        <div class="row-start-1 col-start-1 row-end-10 col-end-2">
          <Sidebar />
        </div>
        <div class="row-start-1 col-start-3 row-end-1 col-end-10">
          <PageHeader />
        </div>
        <div class="row-start-2 col-start-3 row-end-10 col-end-5">
          <DataAverager />
        </div>
        <div class="row-start-2 col-start-6 row-end-6 col-end-10">
          <Graph />
        </div>
        <div class="row-start-7 col-start-6 row-end-10 col-end-10">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
