import React from "react";
import "./Loading.scss";

export function Loading() {
  return (
    <div className="row justify-content-center my-2">
      <div className="spinner-border text-success">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
