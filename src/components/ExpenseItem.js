import "./ExpenseItem.css";

// props is the object call of ExpenseItem in App.js
// We call the Object and their attibutes as one parameter
function ExpenseItem(props) {
  // better to instantiate it it vs <div>{props.date.toLocaleString("en-US", {month: "long"})}</div>
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      {/*
            - output value dynamically called by props again.
            - build in method of date: toLocaleString
            <div>{props.date.toLocaleString("en-US", { month: "long" })}</div>
      */}
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
