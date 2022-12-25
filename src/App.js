import axios from 'axios';
import { useForm } from 'react-hook-form';
import './App.css';
import './components/Style.css'
import { useEffect, useState } from 'react'

function App() {
  const [sectors, setSectors] = useState([]);
  const [selected, setSelected] = useState({})

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    axios.get('http://localhost:5000/sectors')
      .then(res => {
        setSectors(res.data)
        setSelected(res.data[0]);
      })
      .catch(error => console.log(error.message));
  }, [])

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className=" w-5/6 md:w-3/4 mx-auto">
      <h4>Dynamic Form</h4>
      <form onSubmit={ handleSubmit(onSubmit) } action="" className=' w-full md:w-1/2 border mx-auto relative'>
        <div >
          <h4>There will have some text.</h4>
          <label htmlFor="name">Your Name</label>
          <input required { ...register("name") } className=' border my-4 ml-2 focus:outline-none focus:border-purple-500' type="text" name="name" id="name" /> <br />

          <label htmlFor="Sectors">Sectors:</label>
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
                              subParentSector?.SuperChildrenSector && <ul
                                id="menu-lang-python"
                                aria-hidden="true"
                                className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                              >
                                {
                                  subParentSector?.SuperChildrenSector?.map((children, id) => (
                                    <li key={ id } className="px-3 py-1 hover:bg-gray-100">{ children.SubChildrenSector }</li>
                                  ))
                                }
                              </ul>
                            }
                          </li>
                        ))

                      }
                    </ul>
                  </li>
                ))
              }
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
