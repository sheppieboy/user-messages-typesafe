import { User } from "./types";

import UserDisplay from "./components/UserDisplay";

const App = () => {
  const users: User[] = [
    {
      name: "Lukey",
      messages: [
        {
          body: "My birthday is tomorrow!",
        },
        {
          body: "I'm not sure what I want for my birthday",
        },
      ],
    },
  ];
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 overflow-scroll">
      {users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
};

export default App;
