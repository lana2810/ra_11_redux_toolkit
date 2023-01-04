import React, { useState } from "react";
import { set, verify, resetError } from "../redux/counterReducer";
import { useDispatch, useSelector } from "react-redux";

function Field() {
  const dispatch = useDispatch();
  const err = useSelector((state) => state.counter.error);
  const [number, setNumber] = useState("");

  const handleChange = ({ target }) => {
    dispatch(resetError());
    const { value } = target;
    dispatch(set(value));
    setNumber(value);
    dispatch(verify(value));
  };
  console.log(err);
  return (
    <>
      <label htmlFor="field">
        Поле ввода
        <input
          id="field"
          name="field"
          value={number}
          onChange={handleChange}
          className={err && "input-error"}
        />
      </label>
      {err && <div className="message-error">{err}</div>}
    </>
  );
}

export default Field;
