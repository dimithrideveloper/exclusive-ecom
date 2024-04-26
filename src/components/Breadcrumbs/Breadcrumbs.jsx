import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ breadcrumb }) {
  return (
    <div className="layout">
      <div className="breadcrumbs_container">
        <ul>
          <li>
            <Link className="breadcrumb_link_prev">{breadcrumb.prev}</Link>
          </li>
          <li className="breadcrumb_divider">/</li>
          <li>
            <Link className="breadcrumb_link_current">
              {breadcrumb.current}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
