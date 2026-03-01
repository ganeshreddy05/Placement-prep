import { useState } from "react";

function UserCard({ name, role }) {
  const [promotion, setPromotion] = useState("Junior");

  function handleClick() {
    setPromotion("Senior");
  }

  return (
    <div className="border rounded-lg p-4 m-4 w-64 shadow-sm">
      
      <p className="text-lg font-semibold">
        {name}
      </p>

      <p className="text-gray-600 mb-3">
        {promotion} {role}
      </p>

      <button
        className="bg-amber-500 text-white p-2 rounded"
        onClick={handleClick}
      >
        Promote
      </button>

    </div>
  );
}

export default UserCard;