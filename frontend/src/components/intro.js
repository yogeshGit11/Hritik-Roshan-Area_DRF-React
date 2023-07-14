import React from 'react'

export default function intro() {
  return (
    <div>
      <div className="container-fluid" >
        <div className="row mt-5">
          <div className="col-sm-7">
            <span className=' h2 alert alert-primary ' style={{ fontFamily: 'imprint mt shadow', color: 'red' ,textShadow:'2px 2px 5px ' }}><marquee scrollamount="10">WELCOME YOU TO HRITIK ROSHAN AREA...</marquee> </span>
            <div className='p-2 intro mt-5'>
              <p className='text-light mt-2' style={{ fontFamily: 'Lucida Sance', fontSize: 21 }}>
                One of the prominent Bollywood personality of this generation Hrithik Roshan is said to be the best actor, dancer, television host and singer. He began his acting as a child artist in his father’s romantic film “Kaho na pyaar hai” which made him very successful and also get Filmfare awards for it. Hrithik Roshan is also referred as <strong className='h4 text-warning'>“Greek God of Bollywood”</strong>. The actor has got a very good physique and has won numerous awards over the years. <br /><a href="https://en.wikipedia.org/wiki/Hrithik_Roshan"><i>More About Hritik Roshan...</i></a>
              </p>
            </div>
            <h5 className='mt-5 text-warning'><u>A thought from Hritik Roshan:</u></h5>
            <div className="row">
              <div className="col-sm-8">
              <p style={{fontFamily:'tempus sans itc',fontSize:'25px',color:'white'}}>"The only time to take the step towards change is now. Even if they're baby steps, start today! Consistency is important because you must make time to work on your goals. Even if there is little you can do, you must!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
