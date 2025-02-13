import { useState } from "react";
import API from '../API/api'

const Contact = ({ contactClasses, theme }) => {


    let classes = ''

    if (contactClasses.contact) {
        classes = `${theme === 'light' ? 'w-[41rem] max-md:w-full h-full z-10 bg-white  absolute left-[29rem] max-md:-left-0 max-md:top-[35rem]   transition-all duration-1000 ease-in-out overflow-y-scroll'
            : 'w-[41rem] max-md:w-full h-full z-10 bg-black  absolute left-[29rem] max-md:-left-0 max-md:top-[35rem]   transition-all duration-1000 ease-in-out overflow-y-scroll'}`
    } else {
        classes = `${theme === 'light' ? 'w-[41rem] max-md:w-full h-full z-10 bg-white  absolute -left-[12rem] max-md:left-0 max-md:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll' : 'w-[41rem] max-md:w-full h-full z-10 bg-black  absolute -left-[12rem] max-md:left-0 max-md:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll'} `
    }


    const [data, setData] = useState({
        fullname: "",
        email: "",
        message: ""
    })

    function changeHandler(event) {
        const { name, value } = event.target;
        setData(predata => ({
            ...predata,
            [name]: value
        }))
    }

    async function submitHandler(e) {
        e.preventDefault();
        try {
            const response = await API.post('/contact', data)
            if (response.status === 200) {

                alert('data submited')
            } else {
                alert('failed')
            }
            setData({
                fullname: "",
                email: "",
                message: ""
            })

        } catch (error) {
            console.log(error)
        }


    }

    console.log(data)

    return (
        <div className={` transition-all duration-1000 ease-in-out ${classes} p-5 ${theme === 'dark' ? 'text-white' : ' '}`}>
            <form onSubmit={submitHandler} className="pt-10">
                <label className="text-lg">Full Name: </label>
                <input className={`transition-all duration-1000 ease-in-out border-2 block w-full border-gray-200 p-1 mt-2 ${theme === 'dark' ? ' bg-transparent border-purple-500' : ''} `} type="text" name="fullname" onChange={changeHandler} value={data.fullname} />
                <label className="text-lg mt-5 block">Email: </label>
                <input className={`transition-all duration-1000 ease-in-out border-2 block w-full border-gray-200 p-1 mt-2 ${theme === 'dark' ? ' bg-transparent border-purple-500' : ''} `} type="email" name="email" onChange={changeHandler} value={data.email} />
                <label className="text-lg mt-5 block">Message: </label>
                <textarea name="message" rows="5" className={`transition-all duration-1000 ease-in-out border-2 block w-full border-gray-200 p-1 mt-2 ${theme === 'dark' ? ' bg-transparent border-purple-500' : ''} `} onChange={changeHandler} value={data.message} >

                </textarea>
                <button type="submit" className="px-5 py-1 rounded-lg text-white bg-purple-500 mt-5">Submit</button>
            </form>
        </div>
    )
}

export default Contact;