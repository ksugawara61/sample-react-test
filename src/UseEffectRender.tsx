import React, { useState, useEffect } from "react";
import axios from "axios";

type User = {
  id: number;
  username: string;
  email: string;
};

const UseEffectRender: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const fetchJSON = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return res.data;
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJSON();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
