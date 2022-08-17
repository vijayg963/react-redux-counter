import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/action';
import Max from './Max';
import Steps from './Steps';

function Counter(props) {
  return (
    <div className='container'>
      <h2>{props.value}</h2>
      <div>
        <Steps />
        <Max />
      </div>
      <div className='button-box'>
        <button
          className='increment'
          onClick={
            props.value + props.step <= props.max
              ? () => props.dispatch(increment())
              : () => null
          }
        >
          + Increment
        </button>
        <button
          className='decrement'
          onClick={() => props.dispatch(decrement())}
        >
          - Decrement
        </button>
        <button className='reset' onClick={() => props.dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state.value,
    max: state.max,
    step: state.step,
  };
}

export default connect(mapStateToProps)(Counter);
