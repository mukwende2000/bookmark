import Button from "./Button"

type Prop = {
  title: string
  version: string
  url: string
  alt: string
}

function Extension({title, version, url, alt}:Prop) {
  return (
    <div className={`md:-mt-10 rounded-lg md:relative shadow-2xl my-10 px-4 py-10 flex flex-col items-center gap-5 md:w-[24%] ${title === 'Chrome' ? 'top-10' :  title === 'Firefox' ? 'top-20' : 'top-32'}`}>
        <div>
          <img src={url} alt={alt} />
        </div>      
        <div className="py-6 border-b-4 border-dashed w-full">
          <h3>{ title }</h3>
          <p> { version} </p>
        </div>
        <Button text='Add & Install Extension' width="full" />
    </div>
  )
}

export default Extension
