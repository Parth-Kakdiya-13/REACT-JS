import { forwardRef } from "react"
import { myServices } from "../myDetails"


const About = forwardRef(function About({ aboutClass, theme }, ref) {

    let classes = ''

    if (aboutClass.about == true) {
        classes = theme === 'light' ? 'w-[41rem] max-md:w-full h-full z-10 bg-white  absolute left-[29rem] max-md:-left-0 max-md:top-[35rem]  transition-all duration-1000 ease-in-out overflow-y-scroll'
            : 'w-[41rem] max-md:w-full h-full z-10 bg-black  absolute left-[29rem] max-md:-left-0 max-md:top-[35rem]  transition-all duration-1000 ease-in-out overflow-y-scroll'
    } else {
        classes = theme === 'light' ? 'w-[41rem] max-md:w-full h-full z-10 bg-white  absolute -left-[12rem] max-md:left-0 max-md:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll'
            : 'w-[41rem] max-md:w-full h-full z-10 bg-black  absolute -left-[12rem] max-md:left-0 max-md:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll'
    }


    return (
        <div className={`${classes} p-1 ${theme === 'dark' ? 'text-white' : ' '}`} ref={ref}>
            <header className="mt-5">
                <h2 className="pb-3 pl-5 max-sm:pl-0 border-b text-2xl font-semibold"><span className="text-violet-500">A</span>bout Me</h2>
            </header>
            <div className="flex justify-between p-5 max-md:flex-col max-sm:w-full max-sm:items-center">
                <section className="w-[16rem] max-sm:w-full">
                    <p className="text-stone-500 text-xl leading-8 text-wrap">Hi, I'm Parth Kakdiya, a MERN stack developer with great knowledge in React, Node and Tailwind css. A Cyber security enthusiast</p>
                </section>
                <section className="w-1/2 max-sm:w-full mt-5">
                    <ul className="flex gap-3 flex-col items-start">
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Age. . .</span><span>22</span></li>
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Residency. . .</span><span>India</span></li>
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Full Stack Developer. . .</span><span>Available</span></li>
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Address. . .</span><span>Rajkot, Gujarat</span></li>
                    </ul>
                </section>
            </div>

            <div className="mt-5 max-md:p-5">
                <h2 className="pb-3 pl-5 max-sm:pl-0 border-b text-2xl font-semibold"><span className="text-violet-500">M</span>y Services</h2>
                <div className="grid grid-cols-2  max-sm:grid-cols-1">
                    {myServices.map((items) => {
                        return (
                            <>
                                <section className={`h-auto flex py-5 border-b flex-col items-center gap-3 p-3 ${(items.title === "Frontend Developer" || items.title === "Ethical Hacking") ? 'border-r' : ''} max-sm:w-full max-sm:border-r-0`}>
                                    <div className="w-20 h-20 bg-violet-500 flex justify-center items-center rounded-full text-white">
                                        {items.icon}
                                    </div>
                                    <h2 className="text-xl font-semibold">{items.title}</h2>
                                    <p className="text-stone-500 text-center">{items.description}</p>
                                </section>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
})

export default About;