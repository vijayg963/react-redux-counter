import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/action';

function Counter(props) {
  return (
    <article>
      <h2>{props.value}</h2>
      <div>
        <button onClick={() => props.dispatch(increment())}>Increment</button>
        <button onClick={() => props.dispatch(decrement())}>Decrement</button>
        <button onClick={() => props.dispatch(reset())}>Reset</button>
      </div>
    </article>
  );
}

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

export default connect(mapStateToProps)(Counter);
