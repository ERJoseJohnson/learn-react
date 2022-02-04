import logo from './logo.svg';
import './App.css';
import './components/ComplexItemList.css';

// Remember to import your custom component as an object
import Item from './components/Item'
import ComplexItem from './components/ComplexItem';
import Greeting from './components/Greeting';
import ComplexItemList from './components/ComplexItemList';
/*
 This is the main function that kicks all of your React code off. 
 It is the top of the component render tree. All other components will appear below this App component.

 This function is rendered in index.html to the 'root' HTML element via the ReactDOM
*/
function App() {
  let logIn = true;
  return (
    <div className="App">
      <header className="App-header">

        {/* Use the imported custom component as such */}
        <Item></Item>
        {/* <ComplexItem></ComplexItem> */}
        <ComplexItemList className='complex-item-list'></ComplexItemList>
        {/* Pass key-value pairs to the props of the component as below */}
        <Greeting logIn={logIn}></Greeting>

      </header>
    </div>
  );
}

export default App;
