import React, { Component } from 'react'

class EvenAndOdd extends Component {
    //defining a constructor method so we can use state. Before we can use state we have to invoke super.
    //once super has been invoked we can create our state object with this.state = {} and add our properties to it.
    constructor() {
        super()
        //we have now invoked super and we can create our state object adn add our properties.
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }
    
    assignEvenAndOdds(userInput) {
        //deconstructing
        // let {userInput}= this.state
        // console.log(userInput)
        let arr = userInput.split(",")
        let evens = []
        let odds = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evens.push( parseInt(arr[i], 10))
            }else{
                odds.push( parseInt(arr[i], 10))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }
    render(){
        return(
            //component's outline
//What's JSON.stringify? This is not a necassary addition, but without it your array would not display as [1,2,3,4] but rather 1234. JSON.stringify gives our display a more readable format. You could just do this.state.evenArray or this.state.oddArray if you want to.
           <div className="puzzleBox evenAndOddPB">
               <h3>Evens and Odds</h3>
               <input type="text" className="inputLine" onChange={(event) => this.handleChange(event.target.value)}/>
               <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)} }>Click Me</button>
               <span className="resultsBox">Even: {JSON.stringify(this.state.evenArray)}</span>
               <span className="resultsBox">Odd: {JSON.stringify(this.state.oddArray)}</span>
           </div> 
        )
    }
}

export default EvenAndOdd
