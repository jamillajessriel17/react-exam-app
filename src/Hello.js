import { useState } from "react";

const Hello = () => {
  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");
  const handleOnSubmit = () => {
    setName(tempName);
  };
  const handleOnChange = (event) => {
    setTempName(event.target.value);
  };
  return (
    <>
      {/* <p>Enter your name: {name}</p> */}
      <label>Enter your name: {name}</label>
      <br></br>
      <input onChange={handleOnChange} value={tempName}></input>
      <button onClick={handleOnSubmit}>Submit</button>
    </>
  );
};
export default Hello;
