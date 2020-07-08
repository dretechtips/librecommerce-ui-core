import React, { useState } from "react";
import {
  TextInputUIProps,
  TextInputMessage,
  TextInputAddon,
} from "./TextInput.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "src/components/button/Button.component";

/**
 *
 * @param props Input Props
 * @typedef T Invalid State
 */
function TextInput(props: TextInputUIProps) {
  function isValid(): boolean {
    if (!props.validations) return true;
    return props.validations.filter((cur) => !cur.isValid).length === 0;
  }

  function addons(addons: TextInputAddon[]) {
    return addons.map((cur) =>
      cur.type === "button" ? (
        <Button value={cur.text} onClick={cur.action} color="primary" />
      ) : (
        <span className="input-group-text">{cur.text}</span>
      )
    );
  }
  return (
    <div>
      <div className="input-group">
        {props.prepend && (
          <div className="input-group-prepend">{addons(props.prepend)}</div>
        )}
        <input
          readOnly={props.readonly}
          type="text"
          className={
            "form-control " +
            (props.beenClicked ? (isValid() ? "is-valid" : "is-invalid") : "")
          }
          onChange={(event) => props.onChange?.(event.target.value)}
          value={props.defaultValue}
          placeholder={props.example}
        />
        {props.append && (
          <div className="input-group-append">{addons(props.append)}</div>
        )}
      </div>
      {props.beenClicked && (
        <div className="text-sm">
          {isValid() ? (
            <span className="text-success">
              Client has successfully verify this field!
            </span>
          ) : (
            <React.Fragment>
              {props.validations?.map((cur) =>
                cur.isValid ? (
                  <React.Fragment>
                    <span className="text-danger">
                      <FontAwesomeIcon icon={faCheck} fixedWidth />
                      {cur.message.success}
                    </span>
                    <br />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span className="text-success">
                      <FontAwesomeIcon icon={faTimes} fixedWidth />
                      {cur.message.fail}
                    </span>
                    <br />
                  </React.Fragment>
                )
              )}
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default TextInput;
