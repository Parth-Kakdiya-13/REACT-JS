const About = ({ aboutClass }) => {
    // console.log(aboutClass.about);

    let classes = ''

    if (aboutClass.about == true) {
        classes = 'w-[41rem] max-sm:w-[31rem] h-full z-10 bg-white  absolute left-[29rem] max-sm:-left-0 max-sm:top-[35rem]  transition-all duration-1000 ease-in-out overflow-y-scroll'
    } else {
        classes = 'w-[41rem] max-sm:w-[31rem] h-full z-10 bg-white  absolute -left-[12rem] max-sm:left-0 max-sm:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll'
    }


    return (
        <div className={`${classes} p-1`}>
            <header className="p-5">
                <h2 className="mb-3 text-2xl font-semibold"><span className="text-violet-500">A</span>bout Me</h2>
            </header>
            <hr className="border" />
            <div className="flex justify-between mt-3 p-5 max-sm:flex-col max-sm:w-full max-sm:items-center">
                <section className="w-[16rem] max-sm:w-full">
                    <p className="text-stone-500 text-xl leading-8 text-wrap">Hi, I'm Parth Kakdiya, a MERN stack developer with great knowledge in React, Node and Tailwind css. A Cyber security enthusiast</p>
                </section>
                <section className="w-1/2 max-sm:w-full">
                    <ul className="flex gap-3 flex-col items-start">
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Age. . .</span><span>22</span></li>
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Residency. . .</span><span>India</span></li>
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Full Stack Developer. . .</span><span>Available</span></li>
                        <li className="w-full p-2 border-l-2 border-b-2 rounded-md flex justify-between items-center text-stone-500"><span className="px-3 py-1 rounded-md bg-violet-500 text-white">Address. . .</span><span>Rajkot, Gujarat</span></li>
                    </ul>
                </section>
            </div>
            <div className="p-5">
                <h2 className="mb-3 text-2xl font-semibold"><span className="text-violet-500">M</span>y Services</h2>
                <div className="flex justify-center items-center mt-5">
                    <section className="w-1/2 h-[18rem] flex gap-3 flex-col items-center border-r  p-3">
                        <div className="w-20 h-20 bg-violet-500 flex justify-center items-center rounded-full text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8m-4-4v4" /></g></svg>
                        </div>
                        <h2 className="text-xl font-semibold">Frontend Developer</h2>
                        <p className="text-stone-500 text-center">Developing Frontend Responsive and Dynamic Designs using HTML, CSS, JavaScript, React, Tailwind</p>
                    </section>
                    <section className="w-1/2 h-[18rem] flex gap-3 flex-col items-center  p-3">
                        <div className="w-20 h-20 bg-violet-500 flex justify-center items-center rounded-full text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16" /></svg>
                        </div>
                        <h2 className="text-xl font-semibold">Backend Developer</h2>
                        <p className="text-stone-500 text-center">Developing RESTful structured API's using Node.js, Express.js, MongoDB, JWT, Joi and TypeScript in MVC Architecture</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;