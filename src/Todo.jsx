import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  listText: `ml-2 cursor-pointer`,
  listTextComplete: ` ml-2 cursor-pointer line-through`,
  button: ` cursor-pointer flex items-center`,
};

const Todo = ({ todo }) => {
  return (
    <>
      <li className={style.li}>
        <div className={style.row}>
          <input type="checkbox" className={style.checkbox} />
          <p className={style.listText}>{todo}</p>
        </div>

        <button className="button">
          <BsFillTrashFill />
        </button>
      </li>
    </>
  );
};

export default Todo;
