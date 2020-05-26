import React from "react";
import CardComponent from "./Card.component";
import { CardProp, CardState } from "./Card.interface";

export class Card extends React.Component<CardProp, CardState> {
  constructor(props: CardProp) {
    super(props);
  }

  public render() {
    return <Card {...this.props} />;
  }
}

export default Card;
