import React from "react";
import { useSelector } from "react-redux";
import { facts } from "../data/data";

function FactsList() {
  const counter = useSelector((state) => state.counter.value);
  const err = useSelector((state) => state.counter.error);
  const tmp = facts.slice(0, counter);

  return (
    <>
      <h3> Star Wars</h3>
      {tmp.length !== 0 && !err && (
        <ul>
          {tmp.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FactsList;
