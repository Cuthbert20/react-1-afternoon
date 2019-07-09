import React, {Component} from 'react'

class FilterString extends Component {

    constructor(){
        super()
        this.state = {
            hero: [
                "SpiderMan", "Venom", "SuperMan", "Arnold", "Eva", "SGT. Rock"
            ],
            userInput: "",
            filteredHero: []
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    filteredHero(userInput){
        let hero = this.state.hero
        let filteredHero = []

        for(let i = 0; i < filteredHero.length; i++){
            if(hero[i].includes(userInput)){
                filteredHero.push(hero[i])
            }
        }
        this.setState({filteredHero: filteredHero})
    }



    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Name: {JSON.stringify(this.state.hero)}</span>
            <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}/>
            <button className="confirmationButton" onClick={() => this.filteredHero(this.state.userInput)}>Filter Heros</button>
            <span className="resultsBox filterStringRB"> Filtered Heros: {JSON.stringify(this.state.filteredHero)}</span>
            </div>
        )
    }
}

export default FilterString