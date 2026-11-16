// CRUD
// create / read / update / delete
//  post  / get  / put    / delete

let div = document.querySelector(".user-container");

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // console.log(users);
  users.map((user) => {
    let userCard = document.createElement("div");
    userCard.style.cssText =
      "bg-red-800 p-2 border border-blue-400 shadow rounded";
    let nameP = document.createElement("p");
    let emailP = document.createElement("p");
    let phoneP = document.createElement("p");

    nameP.innerText = user.name;
    emailP.innerText = user.email;
    phoneP.innerText = user.phone;

    userCard.append(nameP, emailP, phoneP);

    div.append(userCard);
  });
}

getData();

// get user by id

async function getUserById(id) {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "GET",
    });
    let user = await res.json();

    console.log(user);
  } catch (error) {
    console.log("error block", error);
  }
}

// getUserById(11);

// create
async function createUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: "Arjun",
        age: 30,
        email: "Arjun@gmail.com",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error is ", error);
  }
}

// createUser();

// update
async function updateUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/4", {
      method: "PATCH", // Put -> whole object change  , Patch -> specific field change
      body: JSON.stringify({
        email: "hii@gmail.com",
        age: 50,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error is ", error);
  }
}

// updateUser()

async function deleteUser(id) {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/4", {
      method: "DELETE",
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error ", error);
  }
}

// deleteUser()

let obj = {
  name: "hello",
  age: 30,
  address: {
    vi: "rasu",
    post: "jdksahdjh",
  },
};

console.log(obj.address?.vi);

console.log(obj.address.post ?? "it has no value");

console.log("shjah" && "true");
console.log("" || "sec");

// spread
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];

let newArr = [...arr1, ...arr2];
console.log(newArr);


let accept=(...value)=>{
    console.log(value)
}

accept(1,2,3,4)

// destructure / structure

// let ProductName ="hii"
// let price=300;

let product={
    name:"hii",
    price:300
}

