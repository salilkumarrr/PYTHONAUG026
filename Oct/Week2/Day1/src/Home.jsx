import React from "react";

function Home({ num = 40, obj }) {

  return (
    <div>
      {/* Home page
      <br />
      Number :{props.num}
      <br />
      Name : {props.obj?.name} */}
      Home Page
      <br />

      Number : {num}
    </div>
  );
}

export default Home;
