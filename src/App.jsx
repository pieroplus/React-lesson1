/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        // 再レンダリングが起きすぎないよう、条件を厳しくする
        // setFaceShowFlag(true);
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // 再レンダリングが起きすぎないよう、条件を厳しくする
        // setFaceShowFlag(false);
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  // if (num > 0) {
  //   if (num % 3 === 0) {
  //     // 再レンダリングが起きすぎないよう、条件を厳しくする
  //     // setFaceShowFlag(true);
  //     faceShowFlag || setFaceShowFlag(true);
  //   } else {
  //     // 再レンダリングが起きすぎないよう、条件を厳しくする
  //     // setFaceShowFlag(false);
  //     faceShowFlag && setFaceShowFlag(false);
  //   }
  // }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？">
        はい。元気です！
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};
// export default App;
