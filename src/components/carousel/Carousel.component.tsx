import React from "react";
import { CarouselProps } from "./Carousel.interface";
import { v4 as uuid } from "uuid";

export function Carousel(props: CarouselProps) {
  const id = "carousel" + uuid();
  return (
    <div id={id} className="carousel slide" data-ride="carousel">
      {props.hasIndicator && (
        <ol className="carousel-indicators">
          {props.imagesURL.map((cur, index) => (
            <li data-target={id} data-slide-to={index}></li>
          ))}
        </ol>
      )}
      <div className="carousel-inner">
        {props.imagesURL.map((image) => (
          <div className="carousel-item">
            <img src={image} className="d-block w-100" alt={"Carousel Image"} />
          </div>
        ))}
      </div>
      {props.hasControl && (
        <React.Fragment>
          <a
            className="carousel-control-prev"
            href={id}
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href={id}
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </React.Fragment>
      )}
    </div>
  );
}
