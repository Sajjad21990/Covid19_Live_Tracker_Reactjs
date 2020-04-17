import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Table from "react-bootstrap/Table";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

class TableComponent extends React.Component {
  CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  render() {
    return <div>Helloo</div>;
  }
}

export default TableComponent;
