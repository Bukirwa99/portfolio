import React,{Component} from 'react'
 class Sidebar extends Component{
    render(){
        return(
            <div>
                <div>
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <aside id="colorlib-aside" className="border js-fullheight">
              <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                <h1 id="colorlib-logo"><a href="index.html">Bukirwa Angella</a></h1>
                <span className="email"><i className="icon-mail"></i> angellabukirwa99@gmail.com</span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                    <li><a href="#about" data-nav-section="about">About</a></li>

                    </ul>
                    </div>
                    </nav> <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/Bukirwa Angella" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                
                <li><a href="https://github.com/Bukirwa99" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@angellabukirwa99" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            </aside>
</div>
</div>

            
        )
    }
}
export default Sidebar;