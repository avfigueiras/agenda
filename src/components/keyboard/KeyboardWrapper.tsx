import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<Keyboard>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef
}) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  return (
    <Keyboard
      keyboardRef={r => (keyboardRef.current = r)}
      layoutName={layoutName}
      theme= "hg-theme-default hg-layout-default myTheme"
      layout={{
        default: [
        "1 2 3",
        "4 5 6",
        "7 8 9",
        "K 0 {bksp}"
        ]
    }}
     display= {{
        '{bksp}': `<span class="material-symbols-outlined">backspace</span>`,
     }}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered")}
    />
  );
};

export default KeyboardWrapper;
