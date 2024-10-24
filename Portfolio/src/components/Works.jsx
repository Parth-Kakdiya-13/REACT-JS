const Work = ({ workClasses }) => {
    let classes = ''

    if (workClasses.work) {
        classes = 'w-[41rem] h-full z-10 bg-white  absolute left-[29rem]  transition-all duration-1000 ease-in-out overflow-y-scroll'
    } else {
        classes = 'w-[41rem] h-full z-10 bg-white  absolute -left-[12rem]  transition-all duration-1000 ease-in-out overflow-y-scroll'
    }


    return (
        <div className={classes}>
            <h1>Work</h1>
        </div>
    )
}

export default Work;