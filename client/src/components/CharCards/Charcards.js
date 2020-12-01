import React from 'react';
import "./charcards.css";
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
    return (
        <div className="col-4">
          <div className="charCard" key={`char-${index}`} onClick={()=> {props.selectCharacter(character)}}>
            <img alt={character.name} src={character.image} className="imgCard"/>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title char-title">{character.name}</h5>
              </div>
            </div>
          </div>
        </div>
    );
  });

  return (
    <div className="wrapper">
        <div className="row">
          <div className="offset-mid-3 col-9"><h3>Choose Your Champion</h3></div>
          {characterDiv}
        </div>
    </div>
  );
}

export default Charcards;