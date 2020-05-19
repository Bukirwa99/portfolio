import React ,{Component} from 'react';
import'./App.css';
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'

class App extends Component{
    render(){
        return(
            <div class="header-area header_area header-transparent">
            <div class="main-header">  
            <div class="main-menu f-right d-none d-lg-block"></div>
            <ul id="navigation">  
            <Home></Home>
            <About></About>
        <Works> </Works>
        </ul>
        </div>
        </div>

                
                
        

            
        );
    }
}


export default App;
