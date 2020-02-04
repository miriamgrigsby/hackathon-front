import React, { Component } from 'react';
import './App.css';
import { Header } from "./Components/Header"
import { CitiesContainer } from "./Components/CitiesContainer"
import { CitiesWatch } from "./Components/CitiesWatch"
import {SearchBar} from "./Components/SearchBar"



class App extends Component {

  state = {
    cities: [],
    city: {},
    searchTerm: "",
    isMapShowing: false
  }

  toggleMap = () => {
    this.setState({
      isMapShowing: !this.state.isMapShowing
    })
  }

  showCity = (city) =>{
    this.setState({
      city: city
    })
  }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  filterCity = () => {
    const filteredCity = this.state.cities
    .filter(city => {
      return city.name.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()) 
    })
    this.setState({
      city: {...filteredCity}
    })
  }

    componentDidMount(){
      fetch("http://localhost:3000/cities")
      .then(response => response.json())
      .then(cities => this.setState({ cities: cities }))
    }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-body">
          <div className="side-panel">
            <SearchBar searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} filterCity={this.filterCity}/>
            {this.state.city 
            ? <CitiesWatch city={this.state.city}/>
            : null
            }
          </div>
          <div>
          <button className="show-map" onClick={this.toggleMap}>
            {this.state.isMapShowing ? "Hide Map" : "Show Map"}
            </button>
          {this.state.isMapShowing ? 
          <CitiesContainer cities={this.state.cities} showCity={this.showCity}/>
            : null
          }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
