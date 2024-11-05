
import { useState, useRef } from 'react'
import './App.css'
import About from './components/About'
import Profile from './components/Pofile'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import Work from './components/Works'
import Contact from './components/Contact'

function App() {

  const [classes, setClasses] = useState({
    about: true,
    resume: false,
    work: false,
    contact: false
  });

  const [theme, setTheme] = useState("light")

  const aboutRef = useRef(null)
  const resumeRef = useRef(null)


  function aboutSliderHandler() {
    setClasses(() => {
      return {
        about: true,
        resume: false,
        work: false,
        contact: false
      }
    })
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });

  }
  function resumeSliderHandler() {
    setClasses(() => {
      return {
        about: false,
        resume: true,
        work: false,
        contact: false
      }
    })
    resumeRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function workSliderHandler() {
    setClasses(() => {
      return {
        about: false,
        resume: false,
        work: true,
        contact: false
      }
    })
  }
  function contacttSliderHandler() {
    // setClasses(() => {
    //   return {
    //     about: false,
    //     resume: false,
    //     work: false,
    //     contact: true
    //   }
    // })
    setTheme((theme) => theme === 'light' ? 'dark' : 'light')
  }
  console.log(theme);



  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-black'} h-screen pt-20 transition-all duration-700 ease-in`}>
      <aside className='absolute z-50'>
        <Sidebar aboutSlider={aboutSliderHandler} resumeSlider={resumeSliderHandler} workSlider={workSliderHandler} contactSlider={contacttSliderHandler} classes={classes} theme={theme} />
      </aside>
      <main className='max-sm:ml-10  sm:ml-20 md:ml-32 lg:ml-60 max-sm:mx-6'>
        <section className='relative w-[70rem] max-md:w-fit h-[35rem]'>
          <div className='absolute -top-3 -left-3 bg-violet-300 w-5/12 max-md:w-full h-[35rem]'></div>
          <div className=' relative flex h-[35rem] overflow-hidden max-md:overflow-visible'>
            <Profile />
            <About aboutClass={classes} theme={theme} ref={aboutRef} />
            <Resume resumeClass={classes} theme={theme} />
            {/* <Work workClasses={classes} /> */}
            {/* <Contact contactClasses={classes} /> */}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
