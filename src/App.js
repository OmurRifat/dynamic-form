import axios from 'axios';
import { useForm } from 'react-hook-form';
import './App.css';
import './components/Style.css'
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function App() {
  const [sectors, setSectors] = useState([]);
  const [selected, setSelected] = useState({})

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    axios.get('http://localhost:5000/sectors')
      .then(res => {
        console.log(res.data)
        setSectors(res.data)
        setSelected(res.data[0]);
      })
      .catch(error => console.log(error.message));
  }, [])

  const onSubmit = (data) => {
    console.log(data);
  }

  // const people = [
  //   { name: 'Wade Cooper' },
  //   { name: 'Arlene Mccoy' },
  //   { name: 'Devon Webb' },
  //   { name: 'Tom Cook' },
  //   { name: 'Tanya Fox' },
  //   { name: 'Hellen Schmidt' },
  // ]

  // console.log(sectors);
  return (
    <div className=" w-5/6 md:w-3/4 mx-auto">
      <h4>Dynamic Form</h4>
      <form onSubmit={ handleSubmit(onSubmit) } action="" className=' w-full md:w-1/2 border mx-auto relative'>
        <div >
          <h4>There will have some text.</h4>
          <label htmlFor="name">Your Name</label>
          <input required { ...register("name") } className=' border my-4 ml-2 focus:outline-none focus:border-purple-500' type="text" name="name" id="name" /> <br />

          <label htmlFor="Sectors">Sectors:</label>
          {/* <select required name="pets" id="Sectors" className=' border my-4 ml-2 focus:outline-none focus:border-purple-500'>
            <option value="">Please Select a Sectors</option>
            <option { ...register("sector") } value="Manufacturing">Manufacturing</option>
          </select> */}

          {/* <Listbox value={ selected } onChange={ setSelected }>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-1/3 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md shadow-orange-600 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{ selected?.MainSector }</span>
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
                <Listbox.Options className="absolute mt-1 max-h-60 w-1/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm min-w-32">
                  { sectors?.map((sector, personIdx) => (
                    <Listbox.Option
                      key={ personIdx }
                      className={ ({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={ sector }
                    >
                      <button
                        aria-haspopup="true"
                        aria-controls="parent-sector"
                      >
                        <span
                          className='block truncate font-medium'
                        >
                          { sector?.MainSector }
                        </span>
                        { sector?.ParentSector ? (
                          <span className="absolute inset-y-0 right-1 flex items-center pl-3 text-amber-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                          </span>
                        ) : null }
                      </button>
                      <ul
                        id='parent-sector'
                        aria-hidden='true'
                        className=" group-hover:scale-100 absolute max-h-60 w-full overflow-auto rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm transition duration-150 ease-in-out origin-top min-w-32"
                      >
                        { sector?.ParentSector.map((subParentSector, id) => (
                          <li
                            key={ id }
                            className="rounded-sm px-3 py-1 hover:bg-gray-100"
                          >
                            { subParentSector.SubParentSector }
                          </li>
                        )) }
                      </ul>

                    </Listbox.Option>
                  )) }
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox> */}
          {/* <button
            aria-haspopup='true'
            aria-controls='sector-parents'
            className="outline-none  w-1/2 cursor-pointer focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
          >
            <span
              className='pr-1 font-semibold flex-1'
              value={ selected }
              onChange={ setSelected }>
              { selected?.MainSector }
            </span>
            <span className="pointer-events-none  flex items-center ml-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </button> */}
          {/* <ul
            id='sector-parents'
            aria-hidden='true'
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
          </ul> */}
          <div className="group inline-block">
            <div
              aria-haspopup="true"
              aria-controls="menu"
              className="container-div outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
            >
              <span
                className="pr-1 font-semibold flex-1">{ selected?.MainSector }</span>
              <span>
                <svg
                  className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </div>
            <ul
              id="menu"
              aria-hidden="true"
              className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
            >
              {
                sectors?.map((sector, id) => (
                  <li
                    key={ id }
                    className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
                  >
                    <div
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="nested-menu w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">{ sector?.MainSector }</span>
                      {
                        sector?.ParentSector && <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                          </svg>
                        </span>
                      }
                    </div>
                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                    >
                      {/* { console.log(sector?.ParentSector, "from inside") } */ }
                      {
                        sector?.ParentSector?.map((subParentSector, id) => (
                          <li key={ id } className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                            <div
                              aria-haspopup="true"
                              aria-controls="menu-lang-python"
                              className=" nested-menu w-full text-left flex items-center outline-none focus:outline-none"
                            >
                              <span className="pr-1 flex-1">{ subParentSector?.SubParentSector }</span>
                              {
                                subParentSector?.SuperChildrenSector && <span className="mr-auto">
                                  <svg
                                    className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                  </svg>
                                </span>
                              }
                            </div>
                            {

                              console.log(subParentSector?.SuperChildrenSector, 'from children sector')
                            }
                            {
                              subParentSector?.SuperChildrenSector && <ul
                                id="menu-lang-python"
                                aria-hidden="true"
                                className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                              >
                                {
                                  subParentSector?.SuperChildrenSector?.map((children, id) => (
                                    <li className="px-3 py-1 hover:bg-gray-100">{ children.SubChildrenSector }</li>
                                  ))
                                }
                              </ul>
                            }
                          </li>
                        ))

                      }
                      <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>

                      <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                      <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                    </ul>
                  </li>
                ))
              }

              <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
              {/* <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <div
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="nested-menu w-full text-left flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Langauges</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </span>
                </div>
                <ul
                  id="menu-lang"
                  aria-hidden="true"
                  className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                >
                  <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <div
                      aria-haspopup="true"
                      aria-controls="menu-lang-python"
                      className=" nested-menu w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Python</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </span>
                    </div>
                    <ul
                      id="menu-lang-python"
                      aria-hidden="true"
                      className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                    >
                      <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                      <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                    </ul>
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                </ul>
              </li> */}
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
            </ul>
          </div>

          <div>
            <input { ...register("termsCondition") } type="checkbox" className=' border border-purple-500' />
            <label htmlFor="">Agree to terms</label>
          </div>
          <button type='submit' className=' px-8 py-4 my-4 bg-purple-600'>Save</button>

        </div >
      </form >
    </div >
  );
}

export default App;
