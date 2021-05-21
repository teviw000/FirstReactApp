import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";


// props is the object call of ExpenseItem in App.js
// We call the Object and their attibutes as one parameter
function ExpenseItem(props) {
  // better to instantiate it it vs <div>{props.date.toLocaleString("en-US", {month: "long"})}</div>


  return (
    <div className="expense-item">
      {/* Self closing element vs <ExpenseDate></ExpenseDate> if no content between open/close text*/}
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
