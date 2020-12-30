import characters from '../logic/characters';


var audios = {};
const ROMA = characters.ROMA;
for (let i = 0; i < ROMA.length; i++){
  let filename = ROMA[i].toLowerCase() + ".mp3";
  audios[ROMA[i]] = new Audio('/audio/'+filename);
}
audios['lost'] = new Audio('/audio/lost.wav');

export default audios;
