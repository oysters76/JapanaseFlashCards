import React from 'react'
import Hearts from './components/hearts';
import reducer from './state/reducer';
import actions from './state/actions';
import audio from './audio/loader';
import initalState from './state/state';
import './App.css';



function App() {


  const[state, dispatch] = React.useReducer(reducer, initalState);



  React.useEffect(()=>{
    actions.loadGame(state, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function handleClick(btn){
    if (btn === state.correct){
      audio[btn].play();
      actions.correctAnswer(state, dispatch);
    }else{
      audio['lost'].play();
      actions.wrongAnswer(state, dispatch);
      return;
    }
  }

  return (
    <div className="container">
      <label className="score">{state.score}</label>
      <Hearts h={state.hearts}/>
      <label className="character-label">{state.character}</label>
      <div className="btn-panel">
        {state.btns.map((btn)=>{
          return <button key={btn} onClick={()=>{handleClick(btn)}}>{btn}</button>
        })}
      </div>
    </div>
  );
}

export default App;
