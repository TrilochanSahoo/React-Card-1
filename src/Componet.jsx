import React, {useState} from 'react'
import App from './App'
import Netflix from './Netflix'
import Amazon from './Amozon'
import Disney from './Disney'

function Component(){
    let user
    var [userInput,setUserInput] = useState('');
    var [show,setShow] = useState (false)
    function changeEventHandler(event){
        console.log(event.target.value)
        userInput = event.target.value
        setShow(true);
        setUserInput(userInput);
    }
    function check(){
        if(userInput.toLowerCase()==="netflix"){
            return (
                <Netflix/>
            )
        }else if(userInput.toLowerCase()==="amazon"){
            return (
                <Amazon/>
            )
        }else if(userInput.toLowerCase()==="disney" || userInput.toLowerCase()==="hotstar"){
            return (
                <Disney/>
            )
        }else{
            if(userInput===''){
                return(
                    <App/>
                )
            }
            else{
                return (
                    <>
                        <p className="notification">Sorry, we couldn't find any category for {userInput}.<br/>We are showing all Series.</p>
                        <App/>
                    </>
    
                )
            }
        }
    }
    return(
       <div>
           <header className="heading">
                <h2 className="headline">List of top Web Series</h2>
                <input onChange={changeEventHandler} placeholder="Search for category e.g. Netflix"></input>
           </header>
           {show ? check(): (<App/>)}
       </div>
    )
}

export default Component;

