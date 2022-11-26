import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { AiFillWarning } from "react-icons/ai";

import styles from "../assets/css/filedrop.css";

const FileDrop = ({ accepted_file_type, setCurrentFile, setFileName }) => {
  const [fileFormatError, setFileFormatError] = useState(false);

  const handleFileUploadChange = (event) => {
    setFileFormatError(false);
    var files = event.target.files;
    if (files && files[0]) {
      var extension = files[0].type;

      if (extension !== accepted_file_type) {
        event.target.value = null;
        setFileFormatError(true);
      } else {
        setCurrentFile(files[0]);
        setFileName(files[0].name.split(".").slice(0, -1));
        setFileFormatError(false);
      }
    }
  };

  return (
    <Form.Group controlId="formFile" className="file_form">
      <Form.Label className="file_form__label">
        Please Upload a{" "}
        <span className="file_form__file_format">
          {accepted_file_type.split('/')[1].toUpperCase()}
        </span>{" "}
        file
      </Form.Label>
      <Form.Control
        className="file_form__input"
        onChange={handleFileUploadChange}
        type="file"
        accept={`.${accepted_file_type.split("/")[1].toLowerCase()}`}
      />
      {fileFormatError && (
        <Alert variant={"warning"}>
          <AiFillWarning /> Please upload a valid{" "}
          {accepted_file_type.toUpperCase()} file
        </Alert>
      )}
    </Form.Group>
  );
};

export default FileDrop;
