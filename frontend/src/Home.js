import React, { Component } from 'react';

class Landing extends Component{
    componentDidMount(){
        fetch('/country/AFG')
        .then(response => response.json())
        .then(data => console.log(data));
    }
    render(){
        return(
            <div >
                Vaccination API
            </div>
        )
    }
}

export default Landing;