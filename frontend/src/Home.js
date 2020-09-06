import React, { Component } from 'react';

class Landing extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            selectedVacc: 'Diphtheria',
            vacc: 'Diphtheria',
            vaccDesc: {
                name: "Diphtheria",
                description: "Vaccines are available that can help prevent diphtheria, an infection caused by Corynebacterium diphtheriae bacteria. Four kinds of vaccines used today protect against diphtheria, all of which also protect against other diseases: Diphtheria and tetanus (DT) vaccines, Diphtheria, tetanus, and pertussis (DTaP) vaccines, Tetanus and diphtheria (Td) vaccines and Tetanus, diphtheria, and pertussis (Tdap) vaccines",
                sideEffects: "https://www.cdc.gov/vaccines/vpd/dtap-tdap-td/public/index.html#side-effects",
                duration: "Indefinite",
                administration: "https://www.cdc.gov/vaccines/vpd/dtap-tdap-td/public/index.html#should-get-vaccines",
                medicalConsiderations: "https://www.cdc.gov/vaccines/vpd/dtap-tdap-td/public/index.html#should-not-get-vaccines",
                __v: 0
            },
            selectedCountry: 'AFG',
            name: 'o',
            countryDescription: {
                required: {
                1: "Tetanus"
                },
                recommended: {
                1: "Hepatitis A",
                2: "Hepatitis B",
                3: "Rabies",
                4: "Typhoid",
                5: "Yellow Fever"
                },
                certificatesNeeded: {},
                _id: "5f54428d15159c69c82545fe",
                code: "ARG",
                name: "Argentina",
                travelAdvice: "Travellers should be up to date with routine vaccination courses and boosters as recommended in the UK. These vaccinations include for example measles-mumps-rubella (MMR) vaccine and diphtheria-tetanus-polio vaccine. Country specific diphtheria recommendations are not provided here. Diphtheria tetanus and polio are combined in a single vaccine in the UK. Therefore, when a tetanus booster is recommended for travellers, diphtheria vaccine is also given. Should there be an outbreak of diphtheria in a country, diphtheria vaccination guidance will be provided. Those who may be at increased risk of an infectious disease due to their work, lifestyle choice, or certain underlying health problems should be up to date with additional recommended vaccines. See the individual chapters of the ‘Green Book’ Immunisation against infectious disease for further details."
                }
        };
      }



    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({
            selectedCountry: this.state.name
        })
        fetch(`/country/${this.state.selectedCountry}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                countryDescription: data
            }));

      }
      mySubmitHandlerVacc = (event) => {
        event.preventDefault();
        this.setState({
            selectedVacc: this.state.vacc
        })
        fetch(`/vaccine/${this.state.selectedVacc}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                vaccDesc: data
            }));

      }
    myChangeHandler = (event) => {
        this.setState({
            name: event.target.value,
            selectedCountry: event.target.value,
        });
      }

      myChangeHandlerVacc = (event) => {
        this.setState({
            vacc: event.target.value,
            selectedVacc: event.target.value,
        });
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
                    name: <br />
                    {this.state.countryDescription.name} <br /><br />
                    recommendations:<br />
                    {
                        Object.values(this.state.countryDescription.recommended).map((el, i)=>{
                            return <li key={i}>{el}</li>
                        })
                    }
                        
                        <br /><br />
                    requirements:<br />
                    {
                        Object.values(this.state.countryDescription.required).map((el, i)=>{
                            return <li  key={i}>{el}</li>
                        })
                    }
                    <br /><br />
                    Advice:<br />
                    { this.state.countryDescription.travelAdvice}<br />
                </p>
                <br /><br /><br /><br />
                <form onSubmit={this.mySubmitHandlerVacc}>
                <label style={{marginRight:'10px'}}>
                    Vaccine Name: 
                    <input style={{marginLeft:'10px'}} type="text" name="name" onChange={this.myChangeHandlerVacc} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <p>
                    {this.state.selectedVacc}
                </p>
                <p>
                    name: <br />
                    {this.state.vaccDesc.name} <br /><br />
                    description:<br />
                    {this.state.vaccDesc.description} <br /><br />
                        
                        <br /><br />
                    sideEffects:<br />
                    <a href={this.state.vaccDesc.sideEffects}>{this.state.vaccDesc.sideEffects}</a> <br /><br />
                    <br /><br />
                    duration:<br />
                    {this.state.vaccDesc.duration} <br /><br />
                    medical considerations:<br />
                    <a href={this.state.vaccDesc.medicalConsiderations}>{this.state.vaccDesc.medicalConsiderations}</a> <br /><br /> 
                    administration:<br />
                    {this.state.vaccDesc.administration} <br /><br />
                </p>
            </div>
        )
    }
}

export default Landing;