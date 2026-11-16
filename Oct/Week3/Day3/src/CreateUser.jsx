import axios from "axios";
import React, { useEffect } from "react";

function CreateUser() {
  let createUser = async () => {
    try {
        let res=await axios.post("https://jsonplaceholder.typicode.com/users",{name:"Hello",age:30});
        console.log(res.data)
    } catch (error) {
      console.log("This is error", error);
    }
  };

  useEffect(() => {
    createUser();
  }, []);
  return <div>

    
  </div>;
}

export default CreateUser;