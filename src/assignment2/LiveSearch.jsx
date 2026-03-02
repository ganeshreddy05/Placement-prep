import React, { useMemo, useState } from "react";

const Livesearch = () => {
  const [query, setQuery] = useState("");
  const items = [
   "kwid",
   "swift",
   "creta",
   "Audi",
   "BMW",
   "Benz",
   "Chevorlet",
   "alto",
   "Nexom",
   "punch"
  ];

  const filteredItems = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    return items.filter((item) => item.toLowerCase().includes(lowerQuery));
  }, [query]);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Livesearch</h1>
        <input
          type="text"
          placeholder="Search fruits..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
           className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {filteredItems.length === 0 ? (
          <p  className="text-center text-red-500 font-medium">No result found</p>
        ) : (
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {filteredItems.map((item, index) => (
              <li key={index} className="px-4 py-2 bg-gray-50 rounded-lg hover:bg-blue-50
                           transition cursor-pointer">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Livesearch;