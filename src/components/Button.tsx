type Props = {
  customizable?: boolean
  text: string
  bg: string
  width: string
  color: string
}
function Button({color, bg, text, width, customizable}:Props) {
  return (
    <button className={`bg-${bg} ${customizable ? width : 'w-full'} text-${color} rounded py-4 shadow-lg`}>
      { text }
    </button>
  )
}

export default Button
