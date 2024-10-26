const Sidebar = ({ aboutSlider, resumeSlider, workSlider, contactSlider, classes }) => {


    console.log(classes);


    return (
        <aside className="bg-red-100 mt-5">
            <ul className="flex flex-col gap-3">
                <button className={`group flex items-center bg-white border-b-2 border-r-2 border-white  justify-center p-3  rounded-xl w-52 gap-20 absolute -left-36 z-100 transition-all duration-700 ease-in hover:border-violet-700 hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.about ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={aboutSlider}>
                    <li>ABOUT</li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
                </button>
                <button className={`group flex items-center bg-white border-b-2 border-r-2 border-white  justify-center p-3 hover:border-violet-700 rounded-xl w-52 gap-20 absolute -left-36 top-[6rem] z-100 transition-all duration-700 ease-in hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.resume ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={resumeSlider}>
                    <li>RESUME</li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" /></svg>
                </button>
                <button className={`group flex items-center bg-white border-b-2 border-r-2 border-white  justify-center p-3 hover:border-violet-700 rounded-xl w-52 gap-20 absolute -left-36 top-[11rem] z-100 transition-all duration-700 ease-in hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.work ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={workSlider}>
                    <li>WORKS</li><svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16" /></svg>
                </button>
                <button className={`group flex items-center bg-white border-b-2 border-r-2 border-white  justify-center p-3 hover:border-violet-700 rounded-xl w-52 gap-20 absolute -left-36 top-[16rem] z-100 transition-all duration-700 ease-in hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.contact ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={contactSlider}>
                    <li>THEME</li><svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13.5v8H3v-8zM12 2l5.5 9h-11zm5.5 11c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5" /></svg>
                </button>
            </ul>
        </aside>
    )
}

export default Sidebar;
