import './MainPanel'
import './scss/style.scss'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/Reducer';
import MainPanel from './MainPanel';
import TodoList from './TodoList';
import { useRef } from 'react';

const store = createStore(reducer);

function App() {
  const mainRef = useRef(null)

  const reset = () => {
    console.log('mainRef.current', mainRef.current)
    mainRef.current.resetTimer(true)
  }
  
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList setReset={reset} />
        <MainPanel ref={mainRef} />
      </div>
    </Provider>
  );
}

export default App;
