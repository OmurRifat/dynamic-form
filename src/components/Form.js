import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Form = ({ storedData, closeModal }) => {
    const [updatedData, setUpdatedData] = useState(null);
    const [sectors, setSectors] = useState([]);
    const [selected, setSelected] = useState("")
    const [name, setName] = useState("");


    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        axios.get('http://localhost:5000/sectors')
            .then(res => {
                setSectors(res.data)
                setSelected(storedData?.sector);//kela hobe
            })
            .catch(error => console.log(error.message));
    }, [storedData?.sector])

    const onSubmit = (data) => {
        data.sector = selected
        data.termsCondition = storedData.termsCondition;
        setUpdatedData(data);
        axios.post('http://localhost:5000/store-info', data)
            .then(res => {
                res.status == 200 ? toast.success("Sector Booked") : toast.error("Error Occured, Please Resubmit.")
            })
            .catch(error => console.log(error.message));
    }

    const onSectorClick = (e) => {
        setSelected(e);
    }
    const handleValidInput = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit) } action="" className=' w-full border mx-auto relative'>
                <h4>There will have some text.</h4>
                <label htmlFor="name">Your Name</label>
                <input defaultValue={ storedData.name } onChange={ handleValidInput } required { ...register("name") } className=' border my-4 ml-2 focus:outline-none focus:border-purple-500' type="text" name="name" id="name" /> <br />

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
                        className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 overflow-visible"
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
                                        className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32 overflow-visible cursor-pointer"
                                    >

                                        {
                                            sector?.ParentSector?.map((subParentSector, id) => (
                                                <li key={ id } className=" cursor-pointer rounded-sm relative px-3 py-1 hover:bg-gray-100">
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
                                                            className=" cursor-pointer bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32 overflow-visible"
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
                <br />
                <div className='mt-4'>
                    <button
                        id='submit-btn'
                        type='submit'
                        onClick={ closeModal }
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        SAVE
                    </button>
                </div>
            </form >
        </div>
    );
};

export default Form;