// import "./styles.css";
// export default function Alt(props){
//   // e.preventDefault();
//     // alert('invalid');
//     return (props.trigger)?(
//       <div className="popup">
//       <div className="popup-inner">
//         {props.children}
//       <form>
//         <button className="close-btn">CLOSE</button>
//       </form>
//       {/* {props.children} */}
//       </div>
//       </div>
//     ):""
// }

// import React from 'react';
// import './styles.css';
// const ErrorModal = (props) => {
//   return (
//     <div className='ap'>
//       <div className="popup" onClick={props.onConfirm} />
//           <h2>{props.title}</h2>
//           <div className="popup-inner">
//           <p>{props.message}</p>
//         <button  type={props.type || 'button'} onClick={props.onConfirm}>  {props.children} OKAY  </button>
//        </div>
//     </div>
//   );
// };

// export default ErrorModal;



//Alt.js
import "./styles.css";
export default function Alt({closePop}){
    // alert('invalid');
    return (
      <div className="popup">
      <div className="popup-inner">
        {/* {props.children} */}
        <h1>INVALID</h1>
      <form>
        <button className="close-btn" onClick={() => closePop(false)}>CLOSE</button>
      </form>
      {/* {props.children} */}
      </div>
      </div>
    )
}
