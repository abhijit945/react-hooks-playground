import React, { useState } from "react";
import "../../App.css";

const getList = list =>
  list.map(s => (
    <li key={s.lastName + s.lastName}>
      {s.lastName}, {s.firstName}
    </li>
  ));
/**
 * App that tries the following:
 * 1. Use state
 * 2. Use refs
 * 3. Use effect
 *
 * @returns {React.Component} Renders the component
 */
const Form = () => {
  const [students, setStudentList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div>
      <div>
        <label htmlFor="fn" className="App-section">
          First Name:
          <input
            id="fn"
            type="text"
            onChange={event => setFirstName(event.target.value)}
          ></input>
        </label>
        <label htmlFor="ln" className="App-section">
          Last Name:
          <input
            id="ln"
            type="text"
            onChange={event => setLastName(event.target.value)}
          ></input>
        </label>

        <button
          className="App-section"
          type="submit"
          disabled={
            !firstName ||
            !lastName ||
            students.some(
              s => s.firstName === firstName && s.lastName === lastName
            )
          }
          onClick={() => {
            setStudentList([
              ...students,
              {
                firstName,
                lastName
              }
            ]);
          }}
        >
          Add to list
        </button>
      </div>
      <ul>{getList(students)}</ul>
    </div>
  );
};

export default Form;
