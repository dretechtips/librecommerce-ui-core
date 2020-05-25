import React from "react";
import Queue from "../../containers/Queue";
import { QueueProcess } from "../../interface/Queue.interface";

async function getAvaliable(): Promise<QueueProcess[]> {
  return [];
}

async function getHalted(): Promise<QueueProcess[]> {
  return [];
}

async function complete(id: string) {
  return;
}

async function halt(id: string) {
  return;
}

function Unprocessed() {
  return (
    <Queue
      name="Order"
      getAvaliable={getAvaliable}
      getHalted={getHalted}
      complete={complete}
      halt={halt}
      details="/shipping/archive/details"
    />
  );
}

export default Unprocessed;
