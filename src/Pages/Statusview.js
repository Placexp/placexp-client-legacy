import React from "react";

const Statusview = ({ text, date }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
        rel="stylesheet"
        type="text/css"
      />
      <ul className="timeline">
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">{text}</span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Statusview;
