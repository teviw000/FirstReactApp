import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// props is the object call of ExpenseItem in App.js
// We call the Object and their attibutes as one parameter
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        {/* Self closing element vs <ExpenseDate></ExpenseDate> if no content between open/close text*/}
        <ExpenseDate DATE={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
