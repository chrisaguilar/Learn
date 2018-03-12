import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT } from '../../store/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()} />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSub(5)} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.results.map(storedResult => (
                        <li onClick={() => this.props.onDeleteResult(storedResult.id)} key={storedResult.id}>
                            {storedResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ counter: { counter }, results: { results } }) => ({ counter, results });

const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAdd: value => dispatch({ type: ADD, payload: { value } }),
    onSub: value => dispatch({ type: SUBTRACT, payload: { value } }),
    onStoreResult: (result) => dispatch({ type: STORE_RESULT, payload: { result } }),
    onDeleteResult: id => dispatch({ type: DELETE_RESULT, payload: { id } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
