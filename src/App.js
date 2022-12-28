import axios from 'axios';
import { useForm } from 'react-hook-form';
import './App.css';
import './components/Style.css'
import { useEffect, useState } from 'react'
import Modal from './components/Modal';
import useDarkSide from './Hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App() {
  const [sectors, setSectors] = useState([]);
  const [selected, setSelected] = useState("")
  const [storedData, setStoredData] = useState(null)
  const [agree, setAgree] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState(null)
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  )


  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    axios.get('http://localhost:5000/sectors')
      .then(res => {
        setSectors(res.data)
        setSelected(res.data[0].MainSector);
      })
      .catch(error => console.log(error.message));
  }, [])

  const onSubmit = (data) => {
    data.sector = selected;
    setStoredData(data);
  }
  const onSectorClick = (e) => {
    setSelected(e);
  }

  function closeModal() {
    setIsOpen(false)
    document.getElementById('form-container').reset()
    setSelected("")
  }

  function openModal() {
    name && setIsOpen(true)
  }

  const handleValidInput = (e) => {
    setName(e.target.value);
  }


  //Theme Changer
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  }

  return (
    <div className=" relative bg-gray-100 dark:bg-slate-700 w-full min-h-screen flex items-center justify-center flex-col">
      <DarkModeSwitch
        className=' absolute top-6 right-6'
        style={ { marginBottom: "2rem" } }
        checked={ darkSide }
        onChange={ toggleDarkMode }
        size={ 40 }
      />
      <div className='relative'>
        <div className=' absolute -top-4 -left-8 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob '></div>
        <div className=' absolute -top-4 -right-8 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className=' absolute -bottom-10 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        <div className='relative shadow-2xl bg-white px-6 md:px-16 py-4 rounded-2xl'>
          <h4 className='text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500'>Dynamic Form</h4>
          <form id='form-container' onSubmit={ handleSubmit(onSubmit) } action="" className=' w-full border relative'>
            <div >
              <label htmlFor="name">Your Name</label>
              <input required { ...register("name") } onChange={ handleValidInput } className=' border my-4 ml-2 focus:outline-none focus:border-purple-500' type="text" name="name" id="name" /> <br />

              <label htmlFor="Sectors">Sectors:</label>
              <div className="group inline-block">
                <div
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="container-div outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                >
                  <span
                    className="pr-1 font-semibold flex-1">{ selected }</span>
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
                                  <span onClick={ () => onSectorClick(`${subParentSector?.SubParentSector}`) } className="pr-1 flex-1">{ subParentSector?.SubParentSector }</span>
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
                                        <li key={ id } onClick={ () => onSectorClick(`${children?.SubChildrenSector}`) } className="px-3 py-1 hover:bg-gray-100">{ children.SubChildrenSector }</li>
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
                <input id='agree-condition' { ...register("termsCondition") } type="checkbox" onChange={ () => setAgree(!agree) } className=' border border-purple-500' />
                <label htmlFor="agree-condition">Agree to terms</label>
              </div>
              <button
                disabled={ agree }
                id='submit-btn'
                type='submit'
                onClick={ openModal }

                className=' px-8 py-4 my-4 bg-purple-600 disabled:bg-purple-400 disabled:cursor-not-allowed'
              >
                NEXT
              </button>
            </div >
            { name && <Modal
              isOpen={ isOpen }
              closeModal={ closeModal }
              storedData={ storedData }
            ></Modal> }
          </form >
        </div>
      </div>
    </div >
  );
}

export default App;
