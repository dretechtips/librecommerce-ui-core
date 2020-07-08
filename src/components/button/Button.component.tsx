import { ButtonProps } from "./Button.interface";
import React from "react";

export function Button(props: ButtonProps): JSX.Element {
  if (props.disabled)
    return (
      <button
        className={
          "btn btn-" +
          props.color +
          (props.size ? " btn-" + props.size : "") +
          (props.active ? " active" : "") +
          " " +
          (props.className ? props.className : "")
        }
        disabled
        onClick={props.onClick}
      >
        {props.icon ? (
          <i className={props.icon + (props.value !== "" ? " mr-2" : "")}></i>
        ) : (
          ""
        )}
        {props.value}
      </button>
    );
  else
    return (
      <button
        className={
          "btn btn-" +
          props.color +
          (props.size ? " btn-" + props.size : "") +
          (props.active ? " active" : "") +
          " " +
          (props.className ? props.className : "")
        }
        onClick={props.onClick}
      >
        {props.icon ? (
          <i className={props.icon + (props.value !== "" ? " mr-2" : "")}></i>
        ) : (
          ""
        )}
        {props.value}
      </button>
    );
}

export default Button;
