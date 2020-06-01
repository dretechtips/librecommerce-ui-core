import React from "react";
import {
  MessageFormUIProps,
  MessageFormQuestions,
} from "./MessageForm.interface";
import Card from "src/components/card/Card.container";
import Form from "src/components/form/Form.container";

function MessageForm(props: MessageFormUIProps) {
  return (
    <Form
      to={"path/random"}
      fields={{
        questions: props.questions,
        modifier: "write",
      }}
      title={"Compose new Message"}
      note={
        "Remember: Every message will be sent from your account. All email will be monitored and cannot be retracted once sent. Every message you send can and will be retraced to this account if needed by any administrator."
      }
    />
  );
}

export default MessageForm;
