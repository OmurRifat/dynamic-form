import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Dynamic Form</h4>
      <div className=' w-1/3 border mx-auto'>
        <h4>There will have some text.</h4>
        <label htmlFor="name">Your Name</label>
        <input className=' border my-4 ml-2 focus:outline-none focus:border-purple-500' type="text" name="name" id="name" /> <br />

        <label htmlFor="Sectors">Sectors</label>
        <select name="pets" id="Sectors" className=' border my-4 ml-2 focus:outline-none focus:border-purple-500'>
          <option value="">Please Select a Sectors</option>
          <option value="dog">Manufacturing</option>
        </select>

      </div>
    </div>
  );
}

export default App;
