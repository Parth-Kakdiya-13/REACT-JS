const Sidebar = ({ aboutSlider, resumeSlider, workSlider, contactSlider, classes, theme, themeChanger }) => {

    // let classNames = ""

    // if (classes.about) {
    //     classNames = "border-violet-700 border-r-2 border-b-2 left-0 "
    // } else {
    //     classNames = "border-b-2 border-r-2  "
    // }
    // console.log(classNames);



    return (
        <aside className=" mt-5">
            <ul className="flex flex-col gap-3">
                <button className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} group flex items-center    justify-center p-3  rounded-xl w-52 gap-20 absolute -left-36 z-100 transition-all duration-700 ease-in hover:border-violet-700 hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.about ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={aboutSlider}>
                    ABOUT
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
                </button>
                <button className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} group flex items-center    justify-center p-3 hover:border-violet-700 rounded-xl w-52 gap-20 absolute -left-36 top-[6rem] z-100 transition-all duration-700 ease-in hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.resume ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={resumeSlider}>
                    RESUME
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" /></svg>
                </button>
                <button className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} group flex items-center    justify-center p-3 hover:border-violet-700 rounded-xl w-52 gap-20 absolute -left-36 top-[11rem] z-100 transition-all duration-700 ease-in hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.work ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={workSlider}>
                    WORKS
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16" /></svg>
                </button>
                <button className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} group flex items-center    justify-center p-3 hover:border-violet-700 rounded-xl w-52 gap-20 absolute -left-36 top-[16rem] z-100 transition-all duration-700 ease-in hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.contact ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={contactSlider}>
                    CONTACT
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 11h7V6h-7zm3.5-1.25L15 8V7l2.5 1.75L20 7v1zM2 21q-.825 0-1.412-.587T0 19V5q0-.825.588-1.412T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.587 1.413T22 21zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.937T9 15t4 1.063T15.9 19M9 14q1.25 0 2.125-.875T12 11t-.875-2.125T9 8t-2.125.875T6 11t.875 2.125T9 14m-4.45 5h8.9q-.85-.95-2.013-1.475T9 17t-2.425.525T4.55 19M9 12q-.425 0-.712-.288T8 11t.288-.712T9 10t.713.288T10 11t-.288.713T9 12m3 0" /></svg>
                </button>
                <button className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} group flex items-center   justify-center p-3 hover:border-violet-700 rounded-xl w-52 gap-20 absolute -left-36 top-[21rem] z-100 transition-all duration-700 ease-in hover:left-0 hover:border-b-2 hover:border-r-2 ${classes.theme ? ' border-violet-700 left-0 border-b-2 border-r-2' : ' '}`} onClick={themeChanger}>
                    THEME
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out text-violet-700" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13.5v8H3v-8zM12 2l5.5 9h-11zm5.5 11c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5" /></svg>
                </button>
            </ul>
        </aside>
    )
}

export default Sidebar;
