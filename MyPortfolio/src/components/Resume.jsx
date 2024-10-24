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
                <h2 className="mb-3 text-2xl font-semibold"><span className="text-violet-500">R</span>esume</h2>
            </header>
            <hr className="border" />
            <div className="flex  p-5">
                <section className="w-1/2  border-r border-t border-b p-3">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M336 288H176v-32H16v196a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V256H336Zm160-164a12 12 0 0 0-12-12H384V56a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v100h480Zm-152-12H168V88h176Z" /></svg>
                            <h2 className="text-2xl font-semibold ">EXPERIENCE</h2>
                        </div>
                        <div className="flex flex-col justify-start py-5 border-b">
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
                <section className="w-1/2  border-l border-t border-b p-3">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z" /></svg>
                            <h2 className="text-2xl font-semibold ">EDUCATIONS</h2>
                        </div>
                        <div className="flex flex-col justify-start py-5 border-b">
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
        </div>
    )
}

export default Resume;