function Hearts(props){
  let hearts = "";
  for (let i = 0; i < props.h; i++){
    hearts += "❤️"
  }
  return (
    <label className="life">{hearts}</label>
  );
}

export default Hearts; 
