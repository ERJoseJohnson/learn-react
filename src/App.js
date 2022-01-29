import logo from './logo.svg';
import './App.css';

// Remember to import your custom component as an object
import Item from './components/Item'

/*
 This is the main function that kicks all of your React code off. 
 It is the top of the component render tree. All other components will appear below this App component

 This function is rendered in index.html to the 'root' HTML element via the ReactDOM
 
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>That's right, he's here</p>

        {/* Use the imported custom component as such */}
        <Item></Item>

        
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
