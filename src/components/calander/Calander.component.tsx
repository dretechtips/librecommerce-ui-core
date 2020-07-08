import React from "react";
import { CalanderUIProps } from "./Calander.interface";
import "./Calander.scss";
import ButtonGroup from "../button/button_group/ButtonGroup.component";
import Button from "../button/Button.component";

function DayConverter(day: number): string {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Sunday";
  }
}

function Calander(props: CalanderUIProps) {
  return (
    <React.Fragment>
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between">
          <div>
            <ButtonGroup className="mr-2">
              <Button
                color="success"
                icon="fas fa-arrow-left"
                value=""
                onClick={() => {}}
              />
              <Button
                color="success"
                icon="fas fa-arrow-right"
                value=""
                onClick={() => {}}
              />
            </ButtonGroup>
            <Button color="success" value="Today" onClick={() => {}} />
          </div>
          <ButtonGroup>
            <Button
              color="success"
              value="Month"
              onClick={() => props.handleMode("month")}
            />
            <Button
              color="success"
              value="Week"
              onClick={() => props.handleMode("week")}
            />
            <Button
              color="success"
              value="Day"
              onClick={() => props.handleMode("day")}
            />
          </ButtonGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="calander__container">
            <table className="table">
              <tbody>
                {props.events.map((collection) => (
                  <React.Fragment>
                    <tr className="thead-dark">
                      <th>{DayConverter(new Date(collection.day).getDay())}</th>
                      <th>{collection.day}</th>
                    </tr>
                    {collection.events.map((event) => (
                      <tr>
                        <td>
                          {event.start.toLocaleTimeString()} -{" "}
                          {event.end.toLocaleTimeString()}
                        </td>
                        <td>{event.description}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Calander;
