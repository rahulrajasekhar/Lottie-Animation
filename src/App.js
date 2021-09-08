import React from "react";
import animation from "./animation.json";
import Lottie from "lottie-react-web";
import "./App.css";

function App() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const onChange = (callback) => (event) => {
    callback(event.target.valueAsNumber);
  };
  const Animation = ({ x, y, data }) => {
    return (
      <div style={{ width: "1000px" }}>
        <Lottie
          direction={1}
          options={{
            animationData: data,
            autoplay: false,
            loop: false,
          }}
          animationControl={{
            "GRAPH HIGHLIGHT,Transform,Position,shapes": [0, 0],
            "wavelengthcontrol,Transform,Position": [x],
          }}
          // segments={[y-1,y]}
        />
        {console.log(x, y)}
      </div>
    );
  };
  return (
    <>
      <input
        type="range"
        min={0}
        max={50}
        value={x}
        onChange={onChange(setX)}
      />
      <input
        type="range"
        min={1}
        max={72}
        value={y}
        onChange={onChange(setY)}
      />
      <Animation x={x} y={y} data={animation} />
    </>
  );
}

export default App;
