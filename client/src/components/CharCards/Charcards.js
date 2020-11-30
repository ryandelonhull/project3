import React from 'react';
// import { mapFinderOptions } from 'sequelize/types/lib/utils';


function Charcards(props) {
  
//   const handleClick = () =>{
   
//         name: props.name,
//         image: props.image,
//         attacks: props.attacks,
//         // description: props.description,
//         // link: props.link
//   }
console.log("props", props);
const characterDiv =  props.characters.map( (character, index)=>{
    return (<div onClick={()=> {props.selectCharacter(character)}}>
      <img alt={character.name} src={character.image} />
      <div className="card" id={character.id}>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
        
          <p className="card-text">{character.attack}</p>
          {/* <button className="btn" onClick={handleClick}>Save</button> */}
        </div>
      </div>
    </div>);
  });

  return (
    <div className="wrapper">
      {characterDiv}
    </div>
  );
}

export default Charcards;