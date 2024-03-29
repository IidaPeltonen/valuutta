//import logo from './logo.svg';
import './App.css'
import {useState} from 'react'

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);


function handleSubmit(e) {
  e.preventDefault();
  const conversion = eur * 0.9;
  setGbp(conversion);
}


return (
<div id="container">
  <h3>Currency calculator</h3>
   <form onSubmit={handleSubmit}>
     <div>
       <label>Eur</label>
       <input type="number" onChange={e => setEur(e.target.value)} value={eur}/>
     </div>
     <div>
      <label>Gbp</label>
      <output>{gbp}</output>
      </div>
      <button>Calculate</button>
   </form>
   </div>
  );
}

export default App;





