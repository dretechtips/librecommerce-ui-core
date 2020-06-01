import React from "react";
import { ScenesService } from "src/service/Scenes.service";
import { Switch, Route } from "react-router-dom";

export function Scenes() {
  return (
    <Switch>
      {ScenesService.get()
        .getAll()
        .map((scene) => (
          <Route exact path={scene.path}>
            {scene.component}
          </Route>
        ))}
    </Switch>
  );
}

export default Scenes;
