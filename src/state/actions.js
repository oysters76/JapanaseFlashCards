import getQuestion from '../logic/GetLetter';

const loadGame = (state, dispatch) => {
  const question = getQuestion();
  const initalState = {
    score: 0,
    hearts: 3,
    character: question.letter,
    btns:question.btns,
    correct: question.roma
  };
  dispatch({type:"INITAL", payload:initalState});
}

const correctAnswer = (state, dispatch) => {
  const question = getQuestion();
  let score = state.score + 5;
  dispatch({type:'NEXT_QUESTION', payload: {
    score:score,
    hearts: state.hearts,
    btns: question.btns,
    correct: question.roma,
    character: question.letter
  }});
}

const wrongAnswer = (state, dispatch) => {
  const question = getQuestion();
  let n = state.hearts - 1;
  if (n === 0){
    alert("YOU LOST!");
    loadGame(state, dispatch);
  }else{
    dispatch({type:'NEXT_QUESTION', payload: {
      score:state.score,
      hearts: n,
      btns: question.btns,
      correct: question.roma,
      character: question.letter
    }});
  }
}

const actions = {
  loadGame: loadGame,
  correctAnswer:correctAnswer,
  wrongAnswer:wrongAnswer
};

export default actions;
