import React,{useState} from 'react'

function Home() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [calculate, setCalculate] = useState()

  const expensiveCalculation = (num) => {
    console.log("Calculating...", num);
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  function callExpensive(){
    const result = expensiveCalculation(1)
    setCalculate(result)
  }

  

  return (
    <div className='h-screen bg-gray-400 flex flex-col items-center justify-center text-lg'>
      <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo} className='py-1.5 px-6 text-white bg-black'>Add Todo</button>
      </div>
      <hr/>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2 onClick={() => callExpensive(count)}>Expensive Calculation</h2>
        {calculate}
      </div>
    </div>
    </div>
  )
}

export default Home