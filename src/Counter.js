import React from 'react'

class Counter extends React.Component{
state={
    value:this.props.startValue
}

inc

    render(){
        return(
            <div>
                <div>{this.state.value}</div>
                <button
                onClick={()=>alert('plus')}
                >
                Plus
                </button>
                <button
                onClick={()=>alert('minus')}
                >
                Minus
                
                </button>

            </div>
        )
    }
}

export default Counter