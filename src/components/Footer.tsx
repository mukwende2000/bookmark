import LinkItem from './LinkItem'
import logo from '../assets/images/logo-bookmark.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'

function Footer() {
  return (
    <footer className='py-10 bg-dark_blue flex flex-col md:flex-row justify-around items-center'>
        <div>
          <img src={logo} alt="bookmark logo" className='invert' />
        </div>
        <ul className='my-5 md:flex justify-between w-[40%]'>
          <LinkItem footer title='features' path='features' />
          <LinkItem footer title='pricing' path='pricing' />
          <LinkItem footer title='contact' path='contact' />
        </ul>
        <div className='flex gap-6'>
          <img src={facebook} alt="facebook logo" />
          <img src={twitter} alt="twitter logo" />
        </div>
    </footer>
  )
}

export default Footer
