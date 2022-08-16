import React from "react";

function profilecard(writer) {
  return (
    <div className="card ">
      <div className="textgroup">
        <h3>{Writer.name}</h3>
        <p>{Writer.email}</p>
        <p>{Writer.phone}</p>
        <button className="actionBtn">Read more</button>
      </div>
    </div>
  );
}

export default profilecard;
