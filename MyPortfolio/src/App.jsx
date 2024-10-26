
import { useState } from 'react'
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
  })

  function aboutSliderHandler() {
    setClasses(() => {
      return {
        about: true,
        resume: false,
        work: false,
        contact: false
      }
    })
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
    setClasses(() => {
      return {
        about: false,
        resume: false,
        work: false,
        contact: true
      }
    })
  }

  console.log(classes);
  console.log("rerender");



  return (
    <>
      <aside className='absolute z-50'>
        <Sidebar aboutSlider={aboutSliderHandler} resumeSlider={resumeSliderHandler} workSlider={workSliderHandler} contactSlider={contacttSliderHandler} classes={classes} />
      </aside>
      <main className='w-fit h-auto max-sm:ml-10  sm:ml-20 md:ml-32 lg:ml-60 max-sm:mx-auto'>
        <section className='relative w-[70rem] max-sm:w-[33rem] h-[35rem] mt-20'>
          <div className='absolute -top-3 -left-3 bg-violet-300 w-5/12 max-sm:w-[31rem] h-[35rem]'></div>
          <div className='relative flex h-[35rem] overflow-hidden max-sm:overflow-visible'>
            <Profile />
            <About aboutClass={classes} />
            <Resume resumeClass={classes} />
            {/* <Work workClasses={classes} />
            <Contact contactClasses={classes} /> */}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
