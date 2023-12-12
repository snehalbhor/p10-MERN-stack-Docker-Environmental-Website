import React from "react";

import EnvContext from "./EnvContext";

const EnvState = (props) => {
  const host = "http://localhost:5000";

  const GetEnv = async () => {
    const response = await fetch(`${host}/api/projects`, {
      method: "GET",
    });
    const json = await response.json();
    return json;
  };

  return (
    <EnvContext.Provider value={{ GetEnv }}>
      {props.children}
    </EnvContext.Provider>
  );
};

export default EnvState;
