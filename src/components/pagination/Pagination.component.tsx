import React from "react";
import { PaginationUIProps } from "./Pagination.interface";

function Pagination(props: PaginationUIProps) {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="javascript:void"
            onClick={props.toPrev}
          >
            <i className="fas fa-arrow-left"></i>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="javascript:void">
            {props.current}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="javascript:void"
            onClick={props.toNext}
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
