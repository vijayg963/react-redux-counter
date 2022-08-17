import { connect } from 'react-redux';
import { updateState } from '../store/action';
import '../stylesheet/style.css';

function Steps(props) {
  function handleClick(steps) {
    props.dispatch(updateState(steps));
  }
  return (
    <div>
      <h3>Steps</h3>
      <button
        className={props.step === 5 ? 'active btn' : 'btn'}
        onClick={() => handleClick(5)}
      >
        5
      </button>
      <button
        className={props.step === 10 ? 'active btn' : 'btn'}
        onClick={() => handleClick(10)}
      >
        10
      </button>
      <button
        className={props.step === 15 ? 'active btn' : 'btn'}
        onClick={() => handleClick(15)}
      >
        15
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStateToProps)(Steps);
