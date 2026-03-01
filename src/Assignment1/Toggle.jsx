import { useState } from "react";

function Toggle(){
  const [show, setShow] = useState(false);
  return (
    <div className=" m-4 p-7 border w-auto h-auto">
      <button
        className="border bg-yellow-400 p-1 rounded"
        onClick={() => setShow(!show)}
      >
        {show?"Hide":"Show"}
      </button>
      {show && (
        <p className="p-4">Hidden details</p>
      )}
    </div>
  );
};

export default Toggle;