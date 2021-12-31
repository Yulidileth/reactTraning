import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  console.log('Expense item evaluated by react')

  const clickHandler = () => {
    setTitle('UPDATED');
    console.log(title);
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;

//json
//"browser": {
//"[module-name]": false
//},
