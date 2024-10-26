const Resume = ({ resumeClass }) => {
    let classes = ''

    if (resumeClass.resume) {
        classes = 'w-[41rem] max-sm:w-[31rem] h-full z-10 bg-white  absolute left-[29rem] max-sm:-left-0 max-sm:top-[35rem]   transition-all duration-1000 ease-in-out overflow-y-scroll'
    } else {
        classes = 'w-[41rem] max-sm:w-[31rem] h-full z-10 bg-white  absolute -left-[12rem] max-sm:left-0 max-sm:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll'
    }


    return (
        <div className={`${classes} p-1`}>
            <header className="p-5">
                <h2 className="text-2xl font-semibold"><span className="text-violet-500">R</span>esume</h2>
            </header>
            <div className="flex border-t">
                <section className="w-1/2 border-r  p-5">
                    <div className="flex flex-col">
                        <div className="flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M336 288H176v-32H16v196a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V256H336Zm160-164a12 12 0 0 0-12-12H384V56a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v100h480Zm-152-12H168V88h176Z" /></svg>
                            <h2 className="text-xl font-semibold ">EXPERIENCE</h2>
                        </div>
                        <div className="flex flex-col justify-start py-5 border-b border-t mt-5">
                            <p className="w-fit rounded-md text-sm font-medium px-2 border border-violet-300 text-violet-300">april'23 - Present</p>
                            <h2 className="text-xl my-1">MERN Stack Developer</h2>
                            <p className="text-stone-400">Fresher</p>
                            <p className="mt-2 text-stone-500 text-lg">Leverage MERN stack expertise to design and build robust web applications</p>
                        </div>
                        <div className="flex flex-col justify-start py-5 ">
                            <p className="w-fit rounded-md text-sm font-medium px-2 border border-violet-300 text-violet-300">april'23 - Present</p>
                            <h2 className="text-xl my-1">Ethical Hacking - Cyber Security</h2>
                            <p className="text-stone-400">Fresher</p>
                            <p className="mt-2 text-stone-500 text-lg">Able to make hacking tools, check network security, able to make Malwares, Cyber Security Reseacher</p>
                        </div>
                    </div>
                </section>
                <section className="w-1/2 p-5">
                    <div className="flex flex-col">
                        <div className="flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z" /></svg>
                            <h2 className="text-xl font-semibold ">EDUCATIONS</h2>
                        </div>
                        <div className="flex flex-col justify-start py-5 border-b border-t mt-5">
                            <p className="w-fit rounded-md text-sm font-medium px-2 border border-stone-300 text-stone-300">March'21</p>
                            <h2 className="text-xl my-1">B.com - R.P. Bhalodoa College</h2>
                            <p className="text-stone-400">Rajkot</p>
                            <p className="mt-2 text-stone-500 text-lg">Bachelor's degree in commerce at R.P. Bhalodia commerce college, Rajkot, Gujarat</p>
                        </div>
                        <div className="flex flex-col justify-start py-5">
                            <p className="w-fit rounded-md text-sm font-medium px-2 border border-violet-300 text-violet-300">Nov'2024 - Present</p>
                            <h2 className="text-xl my-1">MCA - Atmiya University</h2>
                            <p className="text-stone-400">Rajkot</p>
                            <p className="mt-2 text-stone-500 text-lg">Master Of Computer Application in Information Techonology at Atmiya University, Rajkot, Gujarat</p>
                        </div>
                    </div>
                </section>
            </div>

            <header className="p-5">
                <h2 className="text-2xl font-semibold"><span className="text-violet-500">M</span>y Skills</h2>
            </header>
            <div className="flex border-t">
                <section className="w-1/2 p-5">
                    <div className="flex flex-col">
                        <div className="flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" /></svg>
                            <h2 className="text-xl font-semibold ">CATEGORIES</h2>
                        </div>
                        <ul className="flex flex-col items-start mt-5">
                            <li className="text-stone-500 w-full">Frontend (React,Tailwind)
                                <div className="w-full h-1 bg-stone-300 my-2">
                                    <div className="w-[13rem] h-1 bg-violet-500"></div>
                                </div>
                            </li>
                            <li className="text-stone-500 w-full">Backend (MongoDB,Express.js,Node.js)
                                <div className="w-full h-1 bg-stone-300 my-2">
                                    <div className="w-[10rem] h-1 bg-violet-500"></div>
                                </div>
                            </li>
                            <li className="text-stone-500 w-full">Ethical Hacking and Cyber Security
                                <div className="w-full h-1 bg-stone-300 my-2">
                                    <div className="w-[9rem] h-1 bg-violet-500"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-1/2 p-5">
                    <div className="flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="2em" height="2em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 4.5a6.5 6.5 0 0 0-4.601 11.091a.75.75 0 1 1-1.062 1.06a8 8 0 1 1 13.632-6.355a3 3 0 0 0-1.756-1.21A6.5 6.5 0 0 0 10 4.5m4.637 4.626A5.002 5.002 0 0 0 5 11c0 1.377.558 2.626 1.458 3.53a.75.75 0 0 0 1.063-1.06a3.5 3.5 0 1 1 5.811-3.544a3 3 0 0 1 1.305-.8M8 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9.5 1a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5" /></svg>                        <h2 className="text-xl font-semibold ">CATEGORIES</h2>
                    </div>
                    <ul className="flex flex-col items-start mt-5">
                        <li className="text-stone-500 w-full">English
                            <div className="w-full h-1 bg-stone-300 my-2">
                                <div className="w-full h-1 bg-violet-500"></div>
                            </div>
                        </li>
                        <li className="text-stone-500 w-full">Gujarati
                            <div className="w-full h-1 bg-stone-300 my-2">
                                <div className="w-full h-1 bg-violet-500"></div>
                            </div>
                        </li>
                        <li className="text-stone-500 w-full">Hindi
                            <div className="w-full h-1 bg-stone-300 my-2">
                                <div className="w-full h-1 bg-violet-500"></div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Resume;