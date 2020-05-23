import React, {Component} from 'react'

export default class Home extends Component {
    render(){
        return(
            <React.Fragment> {/* slider Area Start*/}
            
            <div className="slider-area  slider-height" dataBackground="assets/img/hero/h1_hero.jpg">
                <div className="slider-active">
                    {/* Single Slider */}
                    <div className="single-slider">
                        <div className="slider-cap-wrapper">
                              <div className="hero__img">
                                <img src="assets/img/hero/hero_img.jpg" alt=""   datatransitionDuration="5s"/>
                              </div>
                              <div className="hero__caption">
                                  <h1 dataAnimation="fadeInLeft" dataDelay=".4s">Hi there, I am Angella<br/>i enjoy programming</h1>
                                  <p dataAnimation="fadeInLeft" dataDelay=".6s">i spend  most of my time coding , interaccting with new languages through browsing the internet. My other super power is a defined  interaction with other people at first site. i also love flowers , sausages and doing indoor sports.</p>
                                  {/* Hero Btn */}
                                 
                            </div>  
                        </div>
                    </div>
                    </div>
                    </div>

            </React.Fragment>
            
           
                   
            
            
             )
  }
        
    }
