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
      <div className="main" id ="Portfolio">
      <div className="container col-sm-10 col-md-8 col-lg-8>">
        
              <div className="col-4">
          <div className="charCard" key={`char-${index}`} onClick={()=> {props.selectCharacter(character)}}>
            <img alt={character.name} src={character.image} className="imgCard"/>
            <h5 className="card-title char-title">{character.name}</h5>
              
        
  
          </div>  
        </div>
       </div>
    </div>  




    
    );
  });

  return (
    <div className="wrapper">
       <div>
          <span><h3>Choose Your Champion</h3></span>
        </div>
      <div id="forchoosing">
       
      </div>
        <div className="col-m-1">
       </div>
        <div className="row">
          {characterDiv}
        </div>
    </div>
  );
}

export default Charcards;