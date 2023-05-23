import { useEffect, useState } from 'react'

import LinkItem from './LinkItem'
import logo from '../assets/images/logo-bookmark.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import closeBtn from '../assets/images/icon-close.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'

function Navbar() {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  function handleResize() {
    setWidth(window.innerWidth)
    setMenuIsOpen(false)
  }
  function handleClick() {
    setMenuIsOpen(prev => !prev)
  }

  return (
    <nav className='py-10'>
      <div className="w-[85%] mx-auto flex justify-between items-center">

        <div>
          <img src={logo} alt="bookmark logo" className='' />
        </div>
        {!menuIsOpen && <img src={hamburger} alt="hamburger icon" onClick={handleClick} className='cursor-pointer md:hidden object-contain w-5' />}
        <div className={`${menuIsOpen && width < 768 || width > 768 ? 'block' : 'hidden'} fixed z-50 md:static left-0 right-0 top-0 bottom-0 bg-dark_blue md:bg-transparent p-10 `}>
            <div className='flex justify-between md:hidden'>
                <img src={logo} alt="bookmark logo" className='invert' />
                {menuIsOpen && <img src={closeBtn} alt="close menu icon" onClick={handleClick} className='cursor-pointer md:hidden object-contain w-6 relative z-100 ' />}
            </div>
            <div className='my-12 md:my-0 flex md:gap-10 flex-col md:flex-row items-center justify-center'>
                <LinkItem path="features" isFirst title="Features" />
                <LinkItem path="pricing" title="Pricing" />
                <LinkItem path="contact" isLast title="contact" />
                <button  className='mt-5 md:mt-0 py-3 px-5 md:px-10 border-2 border-solid border-white hover:border-secondary rounded-lg w-full text-white hover:text-secondary uppercase md:bg-secondary hover:bg-transparent duration-300'>login</button>
            </div>
            <div className='flex justify-center gap-10 mt-10 md:hidden'>
              <img src={facebook} alt="Facebook logo" />
              <img src={twitter} alt='Twitter Icon' />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
