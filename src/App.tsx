import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import data, { faq } from './data'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Intro from './components/Intro'
import Extension from './components/Extension'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

import {tab1, tab2, tab3, features} from './data'

import illustration from './assets/images/illustration-hero.svg'
import google_logo from './assets/images/logo-chrome.svg'
import firefox_logo from './assets/images/logo-firefox.svg'
import opera_logo from './assets/images/logo-opera.svg'
import arrow from './assets/images/icon-arrow.svg'

function App() {
  const [active, setActive] = useState(tab1)
  const [isOpen, setIsOpen] = useState<number>(898)


  function activate (id: string) {
    setActive(id)
  }
  function handleClick(id: number) {
    setIsOpen(id)
  }
  return (
    <BrowserRouter>
      <div className='border'>
        <header>
          <Navbar />
          <section className='relative -z-100'>
            <div className='mx-auto w-[85%] text-center md:text-left md:flex flex-row-reverse justify-between items-start'>
              <div>
                  <img src={illustration} alt="hero section illustration" className='ml-5 w-full' />
              </div>
              <div className='max-w-[500px]'>
                  <Intro isHero text={data.hero.text} heading={data.hero.heading} />
                  <div className='flex gap-5'>
                    <Button text="Get it on Chrome" color="white" bg="primary" width='full' />
                    <Button text="Get it on Firefox" color="white" bg="secondary" width='full' />
                  </div>
              </div>
              {/* <div className='w-full h-[240px] bg-primary rounded-full absolute -z-10 -right-24 top-16' /> */}
            </div>
          </section>
        </header>
        <main>
            <section className='my-20'>
              <div className='mx-auto w-[85%] text-center'>
                <Intro text={data.features.text} heading={data.features.heading} />
                <div className='w-[60%] mx-auto mb-5 md:flex justify-between md:border-b border-gray-200'>
                   {features.map((feature) => {
                    return <p key={feature.id} className={`cursor-pointer px-10 py-5 md:border-l-none md:border-r-none md:border-t-none ${feature.id === active ? 'border-b-red-500 border-b-4' : null} `}

                    onClick={() => activate(feature.id)}
                    >{ feature.title }</p>
                   })}                  
                </div>
                <div>
                  <div className='md:flex gap-32 mt-20'>
                    <div className='mb-10'>
                        <img src={active} />
                    </div>
                    <div className='flex flex-col items-center md:items-start'>
                        {active === tab1 && <Intro isSubIntro text={data.features.bookmark?.text}  heading={data.features.bookmark?.heading} /> }

                        {active === tab2 && <Intro isSubIntro text={data.features.intelligent?.text} heading={data.features.intelligent?.heading} /> }

                        {active === tab3 && <Intro isSubIntro text={data.features.share?.text}  heading={data.features.share?.heading} /> }
                        <Button customizable text="More Info" color="white" width='w-full md:w-[50%]' bg="primary" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className='w-[85%] m-auto text-center'>
                <Intro heading={data.extensions.heading} text={data.extensions.text} />
                <div className='md:flex justify-center gap-5'>
                   <Extension title='Chrome' version='Minimum Version 62' url={google_logo} alt='google chrome logo'  />

                   <Extension title='Firefox' version='Minimum Version 55' url={firefox_logo} alt='opera chrome logo'  />
                   
                   <Extension title='Opera' version='Minimum Version 46' url={opera_logo} alt='opera chrome logo'  />
                </div>
              </div>
            </section>
            <section>
              <div className='w-[85%] my-48 mx-auto text-center'>
                   <Intro text={data.faq.text} heading={data.faq.heading} /> 
                   <div className='mb-5'>
                    {faq.map((question) => {
                      return <Faq key={question.id} id={question.id} question={question.question} answer={question.answer} arrow={arrow} isOpen={isOpen} handleClick={() => handleClick(question.id)} />
                    })}
                   </div>
                   <Button customizable text='More Info' width="w-[50%]" bg="primary" color="white" />
              </div>
            </section>
            <Cta />
            <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App