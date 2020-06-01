import React, { useState } from "react";
import "./Loading.scss";
import { LoadingProps } from "./Loading.interface";

export function Loading(props: LoadingProps): JSX.Element {
  const [element, setElement] = useState<JSX.Element | null>(null);
  const [loaded, setLoading] = useState(true);

  props
    .children()
    .then((element) => setElement(element))
    .then(() => setLoading(false));

  if (!loaded && !element)
    return (
      <div className="row justify-content-center my-2">
        <div className="spinner-border text-success">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  else return element as JSX.Element;
}
