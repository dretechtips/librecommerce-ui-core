import React from "react";
import Card from "src/components/card/Card.component";
import { SearchUIProps } from "src/components/search/Search.interface";
// import { Form } from "../containers/Form";

function Search(props: SearchUIProps) {
  return (
    <div className="row">
      <div className="col-12">
        // TODO
        {/* <Form
          title={props.title}
          fields={{
            questions: props.questions,
            modifier: "write",
          }}
        /> */}
        <Card theme="success">// Search Result</Card>
      </div>
    </div>
  );
}

export default Search;
