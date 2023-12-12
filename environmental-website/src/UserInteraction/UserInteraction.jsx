import React, { useContext, useState } from "react";
import "./UserInteraction.css";
import EnvContext from "../Context/Env/EnvContext";

const UserInteraction = () => {
  const [Result, SetResult] = useState("");

  const context = useContext(EnvContext);
  const { GetEnv } = context;

  const EnvInfo = async () => {
    console.log("Env Clicked");
    const responce = await GetEnv();
    console.log(responce);
    console.log(responce.number.env_zones);
    const res = responce.number.env_zones;

    SetResult(res);
  };

  return (
    <div>
      <div className="taskdiv">
        <div className="predict">
          <button onClick={EnvInfo}>
            Get Total Ecosensetive Zones in INDIA
          </button>
        </div>
        <div className="result">{Result}</div>
      </div>
    </div>
  );
};

export default UserInteraction;
