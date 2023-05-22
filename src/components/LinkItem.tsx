import { Link } from "react-router-dom"
type Props = {
    title: string
    path: string
    footer?: boolean
    isFirst?: boolean
    isLast?: boolean
}
function LinkItem({ title, isFirst, isLast, path, footer}:Props) {
    return (
        <Link to={path} className={`w-full text-center text-white hover:text-secondary ${footer ? '' : 'md:text-dark_blue'} text-xl md:text-sm py-4 uppercase border-gray-500 md:border-none ${isFirst ? 'border-t border-solid' : isLast ? 'border-b border-solid' : footer ? '' : 'border-y border-solid' } duration-200 `}>{ title }</Link>
    )
}
export default LinkItem