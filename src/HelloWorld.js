import React from "react";

const HelloWorld = ({money}) => {
  return (
    <div className="hello-world">
      Account balance:
       <span className="hello-world__tech"><br/>$ {money} MXN</span>
    </div>
  );
};

export default HelloWorld;
