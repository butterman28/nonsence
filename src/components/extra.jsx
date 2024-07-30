<div className="navbar" >
            <ol className="nav">
                <li><a href="#home">About</a></li>
                <li><a href="#about">Experiance</a></li>
                <li><a href="#clients">Work</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ol>
        </div>


//mapping items to a button

{navItems.map((item) => (
    <Button key={item} sx={{ color: '#fff' }}>
      //{item}
    </Button>
  )
  )
  }

  function About() {
    return (
        <div id="home" className="about">
            <div className="abheader">
                <ol className="headerlist">
                    <li><h5 className='headerh5'> 01. </h5></li>
                    <li><h1 className='aboutme'>About Me</h1></li>
                </ol>
            </div>
            <p className='para1'>I’m a Full Stack Developer specializing in building exceptional Web Solutions and Models using Django, React, Flutter and sometimes Htmx to give
                your customers and clients that wonderland experiance, all you have to do is give them a white rabbit to chase and watch them exchange whatever matrix
                they live in for yours.
                My focus lies in the art of crafting accessible, human-centered products that resonate with your audience, because in this captivating digital landscape, the customer isn't just right – they are the heroes of their own story. Together, let's weave a narrative where your brand becomes the guiding star, and every click, a magical step towards an unparalleled user experience.</p>
        </div>

    )
}
export default About