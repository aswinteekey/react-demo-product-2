import React from "react";
import { CloseButton, Row } from "react-bootstrap";

function ListTask({task,removeTask,index}) {
  return (
    <>
      <div style={{backgroundColor: "#f0f0f0",width: "95%",margin: "0.5em",padding: "0.5em",
        }}
      >
        <Row
          xs={2}
          sm={2}
          md={2}
          className="justify-content-center align-items-center m-2"
        >
          <h5 style={{ flex: "1", margin: "5px", textAlign: "center" }}>
            {task.title}
          </h5>
          <CloseButton onClick={()=>{removeTask(index)}}style={{ height: "2em" }} />
        </Row>
      </div>
    </>
  );
}

export default ListTask;
