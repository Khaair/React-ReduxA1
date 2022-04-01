import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from '../Components/Services/Actions/CounterAction'

const Counter = ({increment,decrement,count}) => {
    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={()=>increment(5)}>Increment</button>
            <button onClick={()=>decrement(1)}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.CounterReducer.count
})


export default connect(mapStateToProps,{increment,decrement})(Counter)