type Props = {
  isHero?: boolean
  isSubIntro?: boolean
  text: string | undefined
  heading: string | undefined
}

function Intro({ isHero, text, heading, isSubIntro}: Props) {
  return (
    <div className={`${!isHero ? 'max-w-[640px] mx-auto' : null} ${isSubIntro ? 'md:text-left' : null}`}>
      {isHero && <h1 className="md:text-[3rem]">{ heading }</h1> }
      {!isHero && <h2>{ heading }</h2> }
      <p className="mb-7"> { text } </p>
    </div>
  )
}

export default Intro
