import React ,{Component} from 'react';
import'./App.css';
import introduction from './components/introduction'
import about from './components/about'

class App extends Component{
    render(){
        return(
            <div id="colorlib-page">
                <div id="container-wrap">
                    <sidebar></sidebar>
                    <div id="colorlib-main">
                        <introduction></introduction>
                        <about></about>
                                           </div>
                </div>
            </div>
        )
    }
}


export default App;
