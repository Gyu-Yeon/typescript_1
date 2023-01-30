import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const findUser = users.find((user) => {
      return user.name === name;
    });
    setList(findUser);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find</button>
      <div>
        {list && list.name}
        {list && list.age}
      </div>
    </div>
  );
};

export default UserSearch;
