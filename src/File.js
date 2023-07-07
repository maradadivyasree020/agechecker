// import {useState} from 'react';
// import Alt from './Alt';

// export default function File(){
//   const[list,setList]=useState([]);
//   const[name,setName]=useState('');
//   const[error,setError]=useState();
//   const[age,setAge]=useState(0);

//   function handle(e){
//     e.preventDefault();
//     if (name.trim().length === 0 || age.trim().length === 0) {
//       setError({
//         title: 'Invalid input',
//         message: 'Please enter a valid name and age (non-empty values).',
//       });
//       return;
//     }
//     else if (+age < 1) {
//       setError({
//         title: 'Invalid age',
//         message: 'Please enter a valid age (> 0).',
//       });
//       return;
//     }
//     else
//     setList([
//       ...list,
//       {name:name,age:age}
//     ])
//   }
  
//   const errorHandler = () => {
//     setError(null);
//   };
  
//   return(
//   <div className="app">
//     {error && (
//         <Alt title={error.title} message={error.message} onConfirm={errorHandler} />
//       )}
//   <form onSubmit={e => e.preventDefault()}>
//     NAME <input onChange={e => setName(e.target.value)} />
//     <br/><br/>
//     AGE <input onChange={e => setAge(e.target.value)}/>
//     <br/><br/>
//     <button onClick={handle}>ADD</button>
//   </form>
//   <ul>
//     {list.map(li=>(
//       <li>{li.name}{''}{li.age}</li>
//     ))}
//   </ul>
//   {/* <Alt trigger={pop} setTrigger={setPop}>
//     <h1>INVALID</h1>
//   </Alt> */}
//   </div>
//   )}


import {useState} from 'react';
import Alt from './Alt';
export default function File(){
  const[list,setList]=useState([]);
  const[name,setName]=useState('');
  const[pop,setPop]=useState(false);
  const[age,setAge]=useState(0);
  function handle(){
    if(age<=0)
    setPop(true);
    else
    setList([
      ...list,
      {name:name,age:age}
    ])
  }
  return(
  <div className="app">
  <form onSubmit={e => e.preventDefault()}>
    NAME <input onChange={e => setName(e.target.value)} />
    <br/><br/>
    AGE <input onChange={e => setAge(e.target.value)}/>
    <br/><br/>
    <button onClick={handle}>ADD</button>
  </form>
  <ul>
    {list.map(li=>(
      <li>{li.name}{''}{li.age}</li>
    ))}
  </ul>
  {pop && <Alt closePop={setPop}/>} 
  </div>
  )}
