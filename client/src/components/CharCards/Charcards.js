import React from 'react';


function Charcards(props) {
  
//   const handleClick = () =>{
   
//         name: props.name,
//         image: props.image,
//         attacks: props.attacks,
//         // description: props.description,
//         // link: props.link
//   }

  return (
    <div className="wrapper">
      <img alt={props.name} src={props.image} />
      <div className="card" id={props.id}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        
          <p className="card-text">{props.attacks}</p>
          {/* <button className="btn" onClick={handleClick}>Save</button> */}
        </div>
      </div>
    </div>
  );
}

export default Charcards;