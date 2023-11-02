import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shsdow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `borde p-4 ml-2 bg-purple-500 text-slate-100`,
  lists: ``,
  count: `text-center p-2`,
};
function App() {
  const [todos, setTodos] = useState([
    'learn react',
    'learn js',
    'learn backend',
  ]);
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input type="text" placeholder="add todo" className={style.input} />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul className={style.lists}>
          {todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />;
          })}
        </ul>
        <p className={style.count}>you have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
