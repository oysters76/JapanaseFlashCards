import characters from './characters';
import utils from './utils';
const N = 3;

const getQuestion = () => {
  const {index, letter, roma} = getHiraganaOrKatakana();
  let arr = characters.ROMA.slice();
  arr.splice(index, 1);
  let btns = [];
  btns.push(roma);
  for (let i = 0; i < N; i++){
      let ri = utils.getRandomRange(arr);
      btns.push(arr[ri]);
      arr.splice(ri, 1);
  }
  btns = utils.shuffle(btns);
  return {
    letter: letter,
    roma: roma,
    btns:btns
  }
}

const getHiraganaOrKatakana = () => {
  const type = utils.getRandomRange([0,1,2,3,4,5,6,7,8,9]);
  const index = utils.getRandomRange(characters.HIRAGANA);
  if (type > 5){
    return {
      index: index,
      letter: characters.HIRAGANA[index],
      roma: characters.ROMA[index]
    }
  }else{
    return {
      index: index,
      letter: characters.KATAKANA[index],
      roma: characters.ROMA[index]
    }
  }
}



export default getQuestion;
