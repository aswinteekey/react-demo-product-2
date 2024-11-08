import React from "react";
import { CloseButton, Row } from "react-bootstrap";

function ListTask({task}) {
  return (
    <>
      <div
     
        style={{
          backgroundColor: "#f0f0f0",
          width: "80%",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        <Row
          xs={2}
          sm={2}
          md={2}
          className="justify-content-center align-items-center m-1"
        >
          <h5 style={{ flex: "1", margin: "5px", textAlign: "center" }}>
            {task.title}
          </h5>
          <CloseButton style={{ height: "2em" }} />
        </Row>
      </div>
    </>
  );
}

export default ListTask;
