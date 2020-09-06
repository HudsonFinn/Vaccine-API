import React, { Component } from 'react';

class Landing extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            selectedCountry: 'AFG',
            name: 'o',
            countryDescription: {
                required: [
                {
                1: "Tetanus"
                }
                ],
                recommended: [
                {
                1: "Hepatitis A",
                2: "Hepatitis B",
                3: "Rabies",
                4: "Typhoid",
                5: "Yellow Fever"
                }
                ],
                certificatesNeeded: [ ],
                _id: "5f54428d15159c69c82545fe",
                code: "ARG",
                name: "Argentina",
                travelAdvice: "Travellers should be up to date with routine vaccination courses and boosters as recommended in the UK. These vaccinations include for example measles-mumps-rubella (MMR) vaccine and diphtheria-tetanus-polio vaccine. Country specific diphtheria recommendations are not provided here. Diphtheria tetanus and polio are combined in a single vaccine in the UK. Therefore, when a tetanus booster is recommended for travellers, diphtheria vaccine is also given. Should there be an outbreak of diphtheria in a country, diphtheria vaccination guidance will be provided. Those who may be at increased risk of an infectious disease due to their work, lifestyle choice, or certain underlying health problems should be up to date with additional recommended vaccines. See the individual chapters of the ‘Green Book’ Immunisation against infectious disease for further details."
                }
        };
      }

    componentDidMount(){
        fetch('/country/AFG')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        fetch(`/country/${selectedCountry}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                countryDescription: data
            }));

        this.setState({
            selectedCountry: this.state.name
        })
      }

    myChangeHandler = (event) => {
        this.setState({name: event.target.value});
      }
    render(){
        return(
            <div >
                <h1>
                    Vaccination API 
                </h1>
                <form onSubmit={this.mySubmitHandler}>
                <label style={{marginRight:'10px'}}>
                    Country Code: 
                    <input style={{marginLeft:'10px'}} type="text" name="code" onChange={this.myChangeHandler} />
                </label>
                <input type="submit" value="Submit" />
                </form>

                <p>
                    {this.state.selectedCountry}
                </p>
                <p>
                    {this.state.countryDescription.name}
                </p>
            </div>
        )
    }
}

export default Landing;