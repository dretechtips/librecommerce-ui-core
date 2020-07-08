import { FormUIProps, FormEntryType } from "./Form.interface";
import React, { useRef, MutableRefObject } from "react";
import Button from "../button/Button.component";
import Alert from "../alert/Alert.component";
import { scrollToTop } from "src/utils/Elements";
import FormFields from "./form_field/FormField.component";
import Card from "src/components/card/Card.component";
import * as StringUtil from "src/utils/StringUtil";

function Form(props: FormUIProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <Card theme="success" border="success">
        <h2 className="text-center">{StringUtil.toName(props.title)}</h2>
        <div className="mt-3" ref={ref}>
          {props.success && (
            <Alert
              message="The form has recorded the response successfully!"
              theme="success"
              dismissable
            />
          )}
          {props.error && (
            <Alert message={props.error} theme="danger" dismissable />
          )}
          {props.note && <span>{props.note}</span>}
        </div>
        {Object.keys(props.children).map((key) =>
          props.children[key](
            () => {
              props.setEntryType(key, FormEntryType.FIELD);
              return {
                onChange: (val) => props.handleChange(key, val),
                readonly: props.modifier === "read" ? true : false,
              };
            },
            () => {
              props.setEntryType(key, FormEntryType.GROUP);
              return {
                onChange: (val) => props.handleChange(key, val),
                modifier: props.modifier,
                submitable: false,
              };
            }
          )
        )}
        {props.submittable && (
          <div className="form-group">
            <Button
              value="Submit"
              color="primary"
              onClick={() =>
                props.submit(ref as React.MutableRefObject<HTMLDivElement>)
              }
            />
          </div>
        )}
      </Card>
    </React.Fragment>
  );
}

export default Form;
