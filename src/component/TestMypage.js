import React, { useState, useEffect } from "react";
import axios from "axios";

const TestMypage = () => {
  const [datas, setDatas] = useState(null);
  useEffect (() => {
    axios
      .get("users/msw")
      .then((response) => {
        setDatas(response.data);
      });
  },[]);
  return (
    <div>
      {datas && (
        <div>
          {JSON.stringify(datas)}
        </div>
      )}
    </div>
  );
}
export default TestMypage;