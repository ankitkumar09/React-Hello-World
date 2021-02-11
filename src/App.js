import logo from './logo.svg';
import './App.css';

function App() {
  const name ='Ankit';
  const isLoggedin = false;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hello {isLoggedin ? name:' to First React app'} 
        </p> */}
        {/*conditional rendering  */}
        {!isLoggedin && <p>Welcome to First React-App</p>}
        {isLoggedin && <p>Welcome {name} To Your First React-App</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
