import axios from 'axios';
import { useForm } from 'react-hook-form';
import './App.css';
import Services from './components/Services';

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  axios.get('http://localhost:5000/sectors')
    .then(res => {
      console.log(res.data)
    })
    .catch(error => console.log(error.message));

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="App">
      <h4>Dynamic Form</h4>
      <form onSubmit={ handleSubmit(onSubmit) } action="" className=' w-1/3 border mx-auto'>
        <div >
          <h4>There will have some text.</h4>
          <label htmlFor="name">Your Name</label>
          <input required { ...register("name") } className=' border my-4 ml-2 focus:outline-none focus:border-purple-500' type="text" name="name" id="name" /> <br />

          {/* <label htmlFor="Sectors">Sectors</label>
          <select required name="pets" id="Sectors" className=' border my-4 ml-2 focus:outline-none focus:border-purple-500'>
            <option value="">Please Select a Sectors</option>
            <option { ...register("sector") } value="Manufacturing">Manufacturing</option>
          </select> */}

          <Services></Services>

          <div>
            <input { ...register("termsCondition") } type="checkbox" className=' border border-purple-500' />
            <label htmlFor="">Agree to terms</label>
          </div>
          <button type='submit' className=' px-8 py-4 my-4 bg-purple-600'>Save</button>

        </div>
      </form>
    </div>
  );
}

export default App;
