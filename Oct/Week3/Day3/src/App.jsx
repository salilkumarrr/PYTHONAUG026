import React from 'react'
import GetData from './GetData'
import CreateUser from './CreateUser'

function App() {
  return (
    <div>
      <GetData/>
      {/* <CreateUser/> */}
    </div>
  )
}

export default App







// doubt

// import React, { useEffect, useState } from "react";
// // use effect

// // useEffect(() => {
// //   // first
// //   // effect code

// //   return () => {
// //     second
// //     // clear code
// //   }
// // }, [third])

// function App() {
//   let [count, setCount] = useState(0);
//   let [total,setTotal]=useState(0)

//   // case 1
//   // Effect code will execute at every render
//   // useEffect(()=>{
//   //   console.log("Every render")
//   // })


//   // case 2
//   // effect code will execute at first render only
//   // useEffect(()=>{
//   //   console.log("only first render")
//   // },[])

//   // case 3
//   // return stat
//   // useEffect(()=>{
//   //   return()=>{
//   //     console.log("when count value removed")
//   //   }
//   // })


//   // case 4
//   // depe
//   useEffect(()=>{
//     console.log("depend on both")
//   },[total,count])


//   return (
//     <div>
//       Count : {count}
//       <button onClick={() => setCount((count) => count + 1)}>Inc</button>
//       <br />
//       Total :{total}
//       <button onClick={() => setTotal((total) => total + 1)}>Inc</button>
//     </div>
//   );
// }

// export default App;














// // import React, { createContext, useState } from "react";
// // import Consumer from "./Consumer";

// // // create
// // let nameContext = createContext();

// // let themeContext = createContext();

// // const App = () => {
// //   const [theme, setTheme] = useState("white");

// //   return (
// //     <div>
// //       <nameContext.Provider value={"I am King"}>
// //         <themeContext.Provider value={{theme,setTheme}}>
// //           <Consumer />
// //         </themeContext.Provider>
// //       </nameContext.Provider>
// //     </div>
// //   );
// // };

// // export { nameContext, themeContext };
// // export default App;