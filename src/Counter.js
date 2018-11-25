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

    resetHandler = () => {
        this.setState({ number: this.props.startValue })
    }

    saveHandler=()=>{
        window.localStorage.setItem('savedNumber',JSON.stringify(this.state.number))
    }
    loadHandler=()=>{ 
        
        this.setState({number: JSON.parse(window.localStorage.getItem('savedNumber'))})
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
                <button
                    onClick={this.saveHandler}
                >
                    Save Value
                </button>
                <button
                    onClick={this.loadHandler}
                >
                    Load Value
                </button>
            </div>
        )
    }
}

export default Counter