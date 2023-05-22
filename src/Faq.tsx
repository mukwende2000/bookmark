import { MouseEventHandler } from "react"

type Props = {
  question: string
  arrow: string
  answer: string
  isOpen: number
  id: number
  handleClick: MouseEventHandler
}
function Faq({ question, arrow, answer, isOpen, id, handleClick}:Props) {
  return (
    <div onClick={handleClick} className="border-b border-b-gray py-5 text-left max-w-[500px] mx-auto">
      <div className="flex justify-between">
        <p className="text-black">{ question }</p>
        <img src={arrow} alt="" className={`object-contain ${isOpen === id ? 'invert rotate-180' : null}`} />
      </div>
      { isOpen == id && <p className="py-1">{ answer }</p> }
    </div>
  )
}

export default Faq
