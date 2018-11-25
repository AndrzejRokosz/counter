import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.startValue
    }

    incHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }

    decHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }

    incByFiveHandler = () => {
        this.setState({ number: this.state.number + 5 })
    }

    decByFiveHandler = () => {
        this.setState({ number: this.state.number - 5 })
    }
    resetHandler=()=>{
        this.setState({number: this.props.startValue})
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.incHandler}
                >
                    Plus 1
                </button>
                <button
                    onClick={this.decHandler}
                >
                    Minus 1
                </button>
                <button
                    onClick={this.incByFiveHandler}
                >
                    Plus 5
                </button>
                <button
                    onClick={this.decByFiveHandler}
                >
                    Minus 5
                </button>
                <button
                    onClick={this.resetHandler}
                >
                    Reset
                </button>
            </div>
        )
    }
}

export default Counter