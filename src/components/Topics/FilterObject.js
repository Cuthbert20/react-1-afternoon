import React, { Component } from 'react'

class FilterObject extends Component {

    constructor(){
        super()
        this.state = {
            Cars: [{
                make: "Chevy",
                model: "S-10",
                year: 2005
            },
                {
                make: "Ford",
                year: 2017
                },
            {
                make: "Toyota",
                style: "Corolla",
                owner: "Stu"
            }
        ],
        userInput: '',
        filteredCars: []
        }
    }
    
        handleChange(value) {
            this.setState({userInput: value})
        }
        filteredCars(prop){
            let cars = this.state.cars
            let filteredCars = []

            for(let i = 0; i < filteredCars.length; i++){
                if(cars[i].hasOwnProperty(prop)){
                    filteredCars.push(cars[i])
                }
            }
        }

    render(){
        return(
            <div className="PuzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original Arr: {JSON.stringify(this.state.Cars, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filteredCars(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterObjectRB">Filtered Arr: {JSON.stringify(this.state.filteredCars,null,10)}</span>
            </div>
        )
    }
}

export default FilterObject