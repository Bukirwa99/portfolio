import React, {Component} from 'react'


 class About extends Component{
     render(){
    
        return(
           <React.Fragment> 
           <div class="visit-tailor-area fix">
               {/*Right Contents  */}
               <div class="tailor-offers"></div>
               {/* left Contents */}
               <div class="tailor-details">
                   <span><h1>Expertise</h1></span>
                   <h3>technology <br/>Experience</h3>
                   <p>I have experienced building websites using javascript, React,html,css <br/> I am taking part in technology competitions and programs at Andela Uganda under superwoman and women in tech </p>
                    {/* skill Start */}
                   <div class="skill-ara">
                       <div class="skill">
                           <div class="single-skill">
                               <div class="progress-count">
                                   <p><h2>WHO AM I?</h2></p><span>Currently am pursuing a BSC in Software engineering at Makerere University uganda.<br/>I enjoy exploring new technologies  basing on advancements.</span>
                               </div>
                               <div class="progress">
                                   <div class="progress-bar wow slideInLeft" data-wow-duration="1s" datawowDelay=".5s" aria-valuenow="25" role="progressbar" style={{width:"75%" }}  ariaValuemin="0" ariaValuemax="100"></div>
                               </div>
                           </div>
                           <div class="single-skill">
                               <div class="progress-count">
                                   <p><h5>Primary and Higher Education</h5></p><span>I have completed my higher secondary education with a score of 60% with major subjects Physics ,Chemistry and Maths.<br/>During my time at school i took on leadership in all my various classes</span>
                               </div>
                               <div class="progress">
                                   <div class="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".7s" role="progressbar" style={{width:"89%" }} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100"></div>
                               </div>
                           </div>
                           <div class="single-skill">
                               <div class="progress-count">
                                   <p><h1>Hobbies</h1></p><span>Baking , Board games ,Reading Novels and sports</span>
                               </div>
                               <div class="progress">
                                   <div class="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".6s" role="progressbar" style={{width: "95%"}} ariaValuenow="25" aria-valuemin="0" ariaValuemax="100"></div>
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
                               <p><h5>Works That i have Done Recently</h5></p>
                               <p>Attending technology conferences at Andela Uganda. it was quite an interesting experience</p>
                           </div>
                       </div>
                       <div class="col-xl-7 col-lg-5 col-md-4">
                           <div class="wantToWork-btn f-right"> 
                               
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