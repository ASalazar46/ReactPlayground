//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    displayHelloWorld(8)
  );
}

function HelloWorld() {
  return <h1>Hello World!</h1>;
}

function displayHelloWorld(i) {
  let arr = new Array(i).fill(null);
  for (let j = 0; j < i; j++) {
    arr[j] = j;
  }
  return (
    <div>
      {arr.map( (x) => ( <HelloWorld key={x} />) )}
    </div>
  ); 
}

export default App;
