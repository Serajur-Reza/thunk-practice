import React, { useCallback, useEffect } from "react";

import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "./Redux/Reducers/users";

function App() {
  const users = useSelector((state: any) => state.users);

  const dispatch = useDispatch();

  const showUsers = useCallback(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect(() => {
    showUsers();
  }, [showUsers]);

  return (
    <div className="App">
      <h1>The Users</h1>
      <hr />
      {users.map((user: any, index: number) => {
        return (
          <div key={index}>
            <h3>Name: {user.name}</h3>
            <h5>Email: {user.email}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default App;
