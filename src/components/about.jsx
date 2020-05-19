import React, {Component} from 'react'


 class About extends Component{
     render(){
    
        return(
           <React.Fragment>  {/* Our Services Start */}
           <div class="our-services  pt-50 pb-150">
               <div class="container">
                   <div class="row">
                       <div class=" col-lg-4 col-md-6 col-sm-6">
                           <div class="single-services text-center mb-30">
                               <div class="services-ion">
                                   <span class="flaticon-experience"></span>
                               </div>
                               <div class="services-cap">
                                   <h5>Strategic Planning</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                               </div>
                           </div>
                       </div>
                       <div class=" col-lg-4 col-md-6 col-sm-6">
                           <div class="single-services text-center mb-30">
                               <div class="services-ion">
                                   <span class="flaticon-pay"></span>
                               </div>
                               <div class="services-cap">
                                   <h5>Trades & stocks</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                               </div>
                           </div>
                       </div>
                       <div class=" col-lg-4 col-md-6 col-sm-6">
                           <div class="single-services text-center mb-30">
                               <div class="services-ion">
                                   <span class="flaticon-good"></span>
                               </div>
                               <div class="services-cap">
                                   <h5>Audit & Assurance</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/*Our Services End */}
           {/* Visit Our Tailor Start */}
           <div class="visit-tailor-area fix">
               {/*Right Contents  */}
               <div class="tailor-offers"></div>
               {/* left Contents */}
               <div class="tailor-details">
                   <span>All of our Skills In The Fild</span>
                   <h3>Differentiate Yourself And <br/>Attractive Attention</h3>
                   <p>Tempor incididunt ut labore et cvhjfhore magna aliqua. Ut<br/> enim ad minim veniam, quis.</p>
                    {/* skill Start */}
                   <div class="skill-ara">
                       <div class="skill">
                           <div class="single-skill">
                               <div class="progress-count">
                                   <p>User Interface</p><span>75%</span>
                               </div>
                               <div class="progress">
                                   <div class="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".5s" aria-valuenow="25" role="progressbar" style={{width:"75%" }}  aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                           </div>
                           <div class="single-skill">
                               <div class="progress-count">
                                   <p>Digital Marketing</p><span>89%</span>
                               </div>
                               <div class="progress">
                                   <div class="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".7s" role="progressbar" style={{width:"89%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                           </div>
                           <div class="single-skill">
                               <div class="progress-count">
                                   <p>User Interface</p><span>95%</span>
                               </div>
                               <div class="progress">
                                   <div class="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".6s" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   {/* skill End */}
               </div>
   
           </div>
           {/* Visit Our Tailor End */}
           {/*Want To Work Start */}
           <div class="wantToWork-area w-padding3">
               <div class="container">
                   <div class="row align-items-end">
                       <div class="col-xl-5 col-lg-7 col-md-8">
                           <div class="wantToWork-caption">
                               <p>Works That We Done Recently</p>
                               <h2>All startups need to make their business work</h2>
                           </div>
                       </div>
                       <div class="col-xl-7 col-lg-5 col-md-4">
                           <div class="wantToWork-btn f-right">
                               <a href="#" class="btn btn-ans">view more</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
  

           </React.Fragment>

         
            
        );
     }
        
}
export default About;