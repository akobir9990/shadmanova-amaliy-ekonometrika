import React, { useState } from "react";
import Form from "../../components/form";
import Test from "../nationalRanking/test";

function NationalRanking() {
  const [userDetails, setUserDetails] = useState({});
  const [showTest, setShowTest] = useState(false);
  return (
    <div className="h-[100vh]">
      {showTest ? (
        <Test userDetails={userDetails} />
      ) : (
        <Form setUserDetails={setUserDetails} setShowTest={setShowTest} />
      )}
    </div>
  );
}

export default NationalRanking;
