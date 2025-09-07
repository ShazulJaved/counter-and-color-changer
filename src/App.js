import React , {useState} from 'react'
import Nav from './comp/Nav'
function App() {
const [name,setname] = useState("Ali");
const [num,setNum] = useState(0);
function ChangeName() {
  setname("Hassan")
}

function inc() {
  setNum(num+1)
}
function dec() {
  setNum(num-1)
}
function reset() {
  setNum(num*0)
}

  return (
    <div>
      <button onClick = {inc}>Inc</button>
<button onClick = {dec}>Dec</button>
<button onClick = {reset}>Reset</button>
      <h1>{num}</h1>
      <h2>{name}</h2>

<button onClick = {ChangeName}>Click Now</button>



      <Nav name="Ali"/>
      <Nav name="Ali Raza" age={27}/>
      <Nav name="Hassan"/>



    </div>
  )
}

export default App