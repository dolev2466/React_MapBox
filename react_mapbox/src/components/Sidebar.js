import React, { Fragment } from "react";
import "./css/sidebar.css";
const Sidebar = (props) => {
  return (
    <Fragment>
      <div>{props.children}</div>
      <nav className="navigation">
        <ul className="menu">
          <li>
            <a class="active" href="#">
              <svg
                className="home"
                width="30px"
                height="30px"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
              >
                <path d="M419.492,275.815v166.213H300.725v-90.33h-89.451v90.33H92.507V275.815H50L256,69.972l206,205.844H419.492 z M394.072,88.472h-47.917v38.311l47.917,48.023V88.472z" />
              </svg>
              <span title="Home">Home</span>
            </a>
          </li>
          <li>
            <a class="active" href="#">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="css-4ym8mv"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <span title="CreatePoint">יצירת נקודה</span>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
