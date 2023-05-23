import { FormEvent, useState } from 'react'
import Button from './Button'

function Cta() {
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  function handleSubmit(e:FormEvent): void {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email) {
      setError('Whoops, you must enter an email')
      setTimeout(() => {
        setError('')
      }, 2000);
    } else if (!emailRegex.test(email)) {
      setError('whoops, it must be a valid email')
      setTimeout(() => {
        setError('')
      }, 2000);
    } else {
      setError('success')
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  }

  return (
    <section className='bg-primary text-white'>
        <div className="w-[85%] mx-auto text-center p-10">
          <div className='mb-10 max-w-[500px] mx-auto'>
            <h3>35,000+ already joined</h3>
            <h2>Stay up-to-date with what we're doing</h2>
          </div>
          <div>
            <form noValidate onSubmit={handleSubmit} className='md:flex gap-5 items-start justify-center'>
              <div className={`bg-secondary mb-2 ${error ? 'p-1' : null} rounded-md w-full md:max-w-[400px]`}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className='px-5 text-black rounded-md w-full h-14' placeholder='Enter Your Email'/>
                <p>{ error }</p>
              </div>
              <Button secondary customizable text="Contact Us" width="w-full md:w-[30%]" />
            </form>
          </div>
        </div>
    </section>
  )
}

export default Cta
