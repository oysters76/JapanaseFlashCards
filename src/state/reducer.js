const reducer = (state, action) => {
    let newState = Object.assign({}, state);
    if (action.type === 'SCORE'){
      newState.score = action.payload;
    }else if (action.type === 'HEARTS'){
      newState.hearts = action.payload;
    }else if (action.type == 'CHAR'){
      newState.character = action.payload;
    }else if (action.type === 'BTNS'){
      newState.btns = action.payload;
    }else if (action.type == 'INITAL'){
      newState = Object.assign({}, action.payload);
    }else if (action.type === 'NEXT_QUESTION'){
      console.log(action.payload.hearts);
      newState.score = action.payload.score;
      newState.hearts = action.payload.hearts;
      newState.btns = Object.assign([], action.payload.btns)
      newState.correct = action.payload.correct;
      newState.character = action.payload.character;
    }
    return newState;
};

export default reducer; 
