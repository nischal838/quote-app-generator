import React from "react";
import Axios from "axios";
import "./App.css"

class App extends React.Component {
    state = {
        advice: ""
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        Axios.get("https://api.adviceslip.com/advice")
        .then((response) => {
            const { advice } = response.data.slip;

            this.setState({ advice });
        })
        .catch((error) => {

        });
    }

    render() {
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading"> {this.state.advice} </h1>
                    <button onClick={this.fetchAdvice} className="button">
                        <span>NEXT ADVICE!</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;