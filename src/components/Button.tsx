type Props = {
  customizable?: boolean
  text: string
  width: string
  secondary?: boolean
}
function Button({text, width, customizable, secondary}:Props) {
  return (
    <button className={`${secondary ? 'secondary' : 'primary'} border-solid border-2 ${customizable ? width : 'w-full'}  rounded py-4 shadow-lg duration-200`}>
      { text }
    </button>
  )
}

export default Button
