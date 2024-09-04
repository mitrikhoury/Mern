import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    incrementAge = () => {
        this.setState({ age: parseInt(this.state.age) + 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.props.firstName} , {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.incrementAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;


// const PersonCard = (props) => <div>
//     <h1>{props.firstName} , {props.lastName}</h1>
//     <p>{props.age}</p>
//     <p>Hair Color :{props.hairColor}</p>    
//     <button></button>     
//     </div>


