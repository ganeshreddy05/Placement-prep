import UserCard from "./UserCard";

const Dashboard = () => {
  const users = [
    {
      id: 1,
      userName: "GANESH",
      role: "Developer",
    },
    {
      id: 2,
      userName: "Sathwik",
      role: "Tester",
    },
    {
      id: 3,
      userName: "Sanjay",
      role: "UI/UX",
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-6 flex flex-wrap gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.userName}
          role={user.role}
        />
      ))}
    </div>
  );
};

export default Dashboard;