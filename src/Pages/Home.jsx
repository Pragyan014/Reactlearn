import React from 'react'

const Home = () => {
  return (
    <>
    <div className='grid grid-cols-2 gap-5 p-10'>
    <div className="text-white content-center text-center text-2xl space-y-5">
        <h1 className=' '>Welcome to my site</h1>
        <p className=''> Hi, I'm Pragyan Paudel. I have a Bachelor's degree in Information Management (BIM) from Nepal.
        Currently, I am learning Frontend Web Development.</p>
        <button className="bg-lime-500 p-3 w-2/5 rounded-lg shadow-lime-600/60">Lets get Started.</button>
    </div>
    <div className='justify-around' >
        <img className='w-1/2 ml-10 rounded-full' src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/337520386_1907815826217869_6424284028281330619_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gg4doPnkEBEQ7kNvgF1YYap&_nc_ht=scontent.fktm10-1.fna&oh=00_AYD36CYNOJrZ7jBNLEpvbYG3youmFgZFyJ4g0o4PW2krPg&oe=66684782" alt="" />
    </div>
        </div> 
    </>
  )
}

export default Home