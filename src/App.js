import axios from 'axios';
import { useForm } from 'react-hook-form';
import './App.css';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

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

  const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]
  const [selected, setSelected] = useState(people[0])
  return (
    <div className="App">
      <h4>Dynamic Form</h4>
      <form onSubmit={ handleSubmit(onSubmit) } action="" className=' w-1/3 border mx-auto'>
        <div >
          <h4>There will have some text.</h4>
          <label htmlFor="name">Your Name</label>
          <input required { ...register("name") } className=' border my-4 ml-2 focus:outline-none focus:border-purple-500' type="text" name="name" id="name" /> <br />

          <label htmlFor="Sectors">Sectors</label>
          {/* <select required name="pets" id="Sectors" className=' border my-4 ml-2 focus:outline-none focus:border-purple-500'>
            <option value="">Please Select a Sectors</option>
            <option { ...register("sector") } value="Manufacturing">Manufacturing</option>
          </select> */}

          <Listbox value={ selected } onChange={ setSelected }>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-4/5 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md shadow-orange-600 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{ selected.name }</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={ Fragment }
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-4/5 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  { people.map((person, personIdx) => (
                    <Listbox.Option
                      key={ personIdx }
                      className={ ({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={ person }
                    >
                      { ({ selected }) => (
                        <>
                          <span
                            className={ `block truncate ${selected ? 'font-medium' : 'font-normal'
                              }` }
                          >
                            { person.name }
                          </span>
                          { selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null }
                        </>
                      ) }
                    </Listbox.Option>
                  )) }
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

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
