import React from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import { Card, CardText } from 'material-ui/Card'

const style = {
    button: {
        margin: "3px auto",
    },
    divider: {
        margin: "5px",
    },
    cardText: {
        textAlign: "center",
        fontSize: "30px"
    }
}

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

    saveHandler = () => {
        window.localStorage.setItem('savedNumber', JSON.stringify(this.state.number))
    }
    loadHandler = () => {
        this.setState({ number: JSON.parse(window.localStorage.getItem('savedNumber')) })
    }

    render() {
        return (
            <Paper zDepth={2} >
                <Card>
                    <CardText
                        color="red"
                        style={style.cardText}
                    >{this.state.number}
                    </CardText>
                </Card>
                <Divider />
                <RaisedButton
                    label="Plus 1"
                    primary={true}
                    fullWidth={true}
                    onClick={this.incHandler}
                    style={style.button}
                />

                <RaisedButton
                    label="Minus 1"
                    primary={true}
                    fullWidth={true}
                    onClick={this.decHandler}
                    style={style.button}
                />

                <RaisedButton
                    label="Plus 5"
                    primary={true}
                    fullWidth={true}
                    onClick={this.incByFiveHandler}
                    style={style.button}
                />

                <RaisedButton
                    label="Minus 5"
                    primary={true}
                    fullWidth={true}
                    onClick={this.decByFiveHandler}
                    style={style.button}
                />

                <RaisedButton
                    label="Reset"
                    primary={true}
                    fullWidth={true}
                    onClick={this.resetHandler}
                    style={style.button}
                />

                <RaisedButton
                    label="Save Value"
                    primary={true}
                    fullWidth={true}
                    onClick={this.saveHandler}
                    style={style.button}
                />

                <RaisedButton
                    label="Load Value"
                    primary={true}
                    fullWidth={true}
                    onClick={this.loadHandler}
                    style={style.button}
                />
            </Paper>
        )
    }
}
export default Counter