import React, { useState } from "react";
import Form from "../../components/form";
import Test from "../rankEng/test";

function RankingEng() {
  const [userDetails, setUserDetails] = useState({});
  const [showTest, setShowTest] = useState(false);
  return (
    <div className="h-[100vh]">
      {showTest ? (
        // {selectScience = "english" (<div>english test</div>): (<Test userDetails={userDetails} />)}
        <Test userDetails={userDetails} />
      ) : (
        <Form setUserDetails={setUserDetails} setShowTest={setShowTest} />
      )}
    </div>
  );
}

export default RankingEng;
