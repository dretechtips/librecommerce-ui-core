import React from "react";
import { MainPanelProps } from "./MainPanel.interface";
import "./MainPanel.scss";
import getScreenType from "src/utils/ScreenToSize";
import Scenes from "src/components/scenes/Scenes.component";

export default (props: MainPanelProps) => {
  function getMarginLeft(): number {
    const screen = getScreenType();
    if (screen === "md" || screen === "sm" || screen === "xs") return 0;
    else return props.marginLeft ? props.marginLeft : 0;
  }
  return (
    <main
      style={{
        marginTop: props.marginTop ? props.marginTop : 0,
        marginLeft: getMarginLeft(),
      }}
      className="p-4 main-view"
    >
      <Scenes />
    </main>
  );
};
