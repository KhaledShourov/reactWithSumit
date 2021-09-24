// const domContainer = document.querySelector('#root')

// const myElement = React.createElement("div", null,[
//   React.createElement("p", null, "Hello World"), 
//   React.createElement("p", null, "Hello World"), 
   
// ])

// ReactDOM.render(myElement, domContainer);

const docContainer = document.querySelector("#root")

const Increment =() =>{
  const [counter, setCounter] = React.useState(0);
  
return (
  <div>
    <h1 id ="display">{counter}</h1>
    <div>
      <button id="button" onClick={() => setCounter(counter +1)} >Increment+</button>
    </div>
  </div>
);
}
ReactDOM.render(
  <div>
    <Increment/>
    <Increment/>
  </div>,
  docContainer)