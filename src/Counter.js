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
            </div>
        )
    }
}

export default Counter