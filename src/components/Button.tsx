type Props = {
  customizable?: boolean
  text: string
  bg: string
  width: string
  color: string
}
function Button({color, bg, text, width, customizable}:Props) {
  return (
    <button className={`bg-${bg} hover:bg-${color} border-solid border-2 border-${bg} hover:border-${bg} ${customizable ? width : 'w-full'} text-${color} hover:text-${bg} rounded py-4 shadow-lg duration-200`}>
      { text }
    </button>
  )
}

export default Button
