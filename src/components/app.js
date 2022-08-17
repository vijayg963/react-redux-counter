import { Provider } from 'react-redux';
import store from '../store';
import '../stylesheet/style.css';
import CounterWithSteps from './CounterWithSteps';

function App() {
  return (
    <div>
      <h1>Redux Counter App</h1>
      <Provider store={store}>
        <CounterWithSteps />
      </Provider>
    </div>
  );
}

export default App;
