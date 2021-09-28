//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    displayHelloWorld(8)
  );
}

function HelloWorld(props) {
  return <h1>I am Hello World! #{props.number+1}</h1>;
}

function displayHelloWorld(i) {
  let arr = new Array(i).fill(null);
  for (let j = 0; j < i; j++) {
    arr[j] = j;
  }
  return (
    <div>
      {arr.map( (x) => ( <HelloWorld key={x} number={x}/>) )}
    </div>
  ); 
}

export default App;
