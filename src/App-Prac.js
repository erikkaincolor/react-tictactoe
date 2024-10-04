import React from 'react';
import {useState} from 'react'; //new
// https://react.dev/learn/tutorial-tic-tac-toe#overview

// NOTES + other ways of writing the same thing

// square component (child)
// function Square({value}) {

// function Square() {
//     const [x, setX] = useState('-');
//     const [o, setO] = useState('-');


//     // function Square({ value }) indicates the Square component can be passed a prop called value.
//     // return <button className="square">{value}</button>;
//     const xoxo = {if xoxo == ''} ? {onClick={()=>setX('x')}} : {onClick={()=>setO('o')}};

//     return <button className="square" onClick={()=>setX('x')}>{xoxo}</button>;
//     // couldve defined onclick function inside the component and outside of the return statement
//   }


// ternary operator

// assigning a value to a variable based on options in conditional

// const xoxo = {if xoxo == ''} ? {onClick={()=>setX('x')}} : {onClick={()=>setO('o')}};

// test:
// board component parent
// export default function Board() {

//     return( 
//     <> 
//           <div className="board-row">
//           <Square />
//           <Square value=""/>
//           <Square value=""/> 
//         </div>
//         <div className="board-row">
//         <Square value=""/>
//         <Square value=""/>
//         <Square value=""/>
//         </div>
//         <div className="board-row">
//         <Square value=""/>
//         <Square value=""/>
//         <Square value=""/>  
//         </div>
//     </>)
//   }



// tested and works:
// // board component parent
// export default function Board() {
//   return( 
//     //I added a parenthesis now that this return holds multiple elements

//     //dont forget fragments help display multiple elements side by side 
//   <> 
//         <div className="board-row">
//         <Square value="1"/>
//         <Square value="2"/>
//         <Square value="3"/>
//       </div>
//       <div className="board-row">
//       <Square value="4"/>
//       <Square value="5"/>
//       <Square value="6"/>
//       </div>
//       <div className="board-row">
//       <Square value="7"/>
//       <Square value="8"/>
//       <Square value="9"/>
//       </div>
//   </>)
// }


// or
// const Square = () => {
//     return (<button className="square">Howdy 2!</button>);
//     }
    
// export default Square;























// correct code straight from tutorial with notes

// import React from 'react';
// import {useState} from 'react'; //new


// // square component (child)

// function Square({value, onSquareClick}) {

// //     const[value, setValue] = useState(null);
// // // value stores the value and setValue is a function that can be used to change the value. 

//     // function handleClick() {
//     //     // event handler function
//     //     setValue("X");
//     //     console.log("clicked!");
//     // }
//     // Each Square has its own state: the value stored in each Square is completely independent of the others. When you call a set function in a component, React automatically updates the child components inside too.

//     // return <button className="square" onClick={handleClick}>{value}</button>;
//     return (<button className="square" onClick={onSquareClick}>{value}</button>);
//     }




// // board component parent
// export default function Board() {
//     const[squares, setSquares] = useState(Array(9).fill(null));
//     // Array(9).fill(null) creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array.

//     // The Board component now maintains which squares are filled..via an array

//     // squares array will look like this:
//     // ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

//     // //////////////////////////////
//     // //////////////////////////////



//     // the process for this: each square needs an onclick, so passs onclick to child function from parent, put that new click property in the parent function within the <Component> as a prop, then create the handleClick func for it:

//     function handleClick(i){
//         // `i` will be the indice of the square array, 0-9 indices

//         // he handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
//         const nextSquares = squares.slice();
//         nextSquares[i]= 'X';
//         // Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).
//         setSquares(nextSquares);
//     }

//     return (
//       <>
//         <div className="board-row">
//             {/* Each Square has its own state: the value stored in each Square is completely independent of the others. When you call a set function in a component, React automatically updates the child components inside too.  */}

//           <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//           <Square value={() => handleClick(1)} />
//           <Square value={() => handleClick(2)} />
//         </div>
//         <div className="board-row">
//           <Square value={() => handleClick(3)} />
//           <Square value={() => handleClick(4)} />
//           <Square value={() => handleClick(5)} />
//         </div>
//         <div className="board-row">
//           <Square value={() => handleClick(6)} />
//           <Square value={() => handleClick(7)} />
//           <Square value={() => handleClick(8)} />
//         </div>
//       </>
//     );
//   }
