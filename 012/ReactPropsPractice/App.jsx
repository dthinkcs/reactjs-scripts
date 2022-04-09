import React from "react";
import contacts from "../contacts";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

let cards = [];

for (let i = 0; i < contacts.length; i++) {
  cards.push(
    <Card
      name={contacts[i].name}
      imgURL={contacts[i].imgURL}
      phone={contacts[i].phone}
      email={contacts[i].email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {cards} // WE EVALUATE THE ENTIRE ARR
    </div>
  );
}

export default App;
