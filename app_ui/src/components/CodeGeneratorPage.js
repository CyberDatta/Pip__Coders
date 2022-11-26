import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Alert, Form } from "react-bootstrap";
import FileDrop from "./FileDrop";
import { AiFillWarning } from "react-icons/ai";
import CodeBlockComp from "./utils/CodeBlockComp";
import { VscJson, VscGear } from "react-icons/vsc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { accessURL } from "../apis/backend_api";
import styles from "../assets/css/code_generator_page.css";
import {connect} from 'react-redux'
import {codeGeneratorAPI} from '../actions/index'
import generatorReducer from "../reducers/generatorReducer";

var data = {};
const jsonData = {
  text: "sample",
  sample: "text",
};

data.data = jsonData;
data.language = "json";

const CodeGeneratorPage = (props) => {
  const [fileName, setFileName] = useState();
  const [csvFile, setCsvFile] = useState();
  const [jsonFile, setJsonFile] = useState();
  const [jsonFileData, setJsonFileData] = useState('');
  const [inputError, setInputError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState({
    data: "print('Code will be displayed here')",
    language : "python"
  });

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  function readFileAsync(file) {
    return new Promise(async(resolve, reject) => {
      let reader = new FileReader();

      reader.onload = () => {
        setJsonFileData(reader.result);
        resolve(reader.result);
      }
      reader.readAsText(file);
      reader.onerror = reject;
    })
  }

  const handleGenerate = async() => {
    setInputError(false);
    if (fileName && fileName !== "" && csvFile && jsonFile) {
      await readFileAsync(jsonFile);
      const tempFile = new File([csvFile], fileName, {
        type: csvFile.type,
        lastModified: csvFile.lastModified,
      });
      
      const data = {
        token: props.auth.token,
        json_file: JSON.stringify(jsonFileData),
        csv_mapping: tempFile
      }

      // backend api
      // send tempFile
      await props.codeGeneratorAPI(data, setLoading);

    }else{
      setInputError(true);
    }
  }

  var genCodeProps = {};

  if(props.generatorReducer.message && props.generatorReducer.message.data){
    console.log(JSON.stringify(props.generatorReducer.message.data.script))
    genCodeProps.data = props.generatorReducer.message.data.script;
  } 
  else if(props.generatorReducer.error){
    genCodeProps.data = "print('An error occured while generating code')";
  }
  else if(props.generatorReducer.isLoading){
    genCodeProps.data = "print('We are getting the code.')";
  }
  else {
    genCodeProps.data = "print('Code will be displayed here')";
  }
  genCodeProps.language = "python";

  return (
    <>
      <div className="code_generator">
        <h2 className="section_heading red_orange_gradient main_heading">Code Generator</h2>
        <Container className="code_generator__container_input">
          <Row>
            <Col lg="5" className="form_content_div">
              <FileDrop
                accepted_file_type="text/csv"
                setCurrentFile={setCsvFile}
                currentFile={csvFile}
                setFileName={setFileName}
              />
              <FileDrop
                accepted_file_type="application/json"
                setCurrentFile={setJsonFile}
                currentFile={jsonFile}
                setFileName={setFileName}
              />
              <Form.Label className="file_form__label">
                Enter a Mapping Name
              </Form.Label>
              <Form.Control
                placeholder="Mapping Name"
                aria-label="Mapping Name"
                value={fileName}
                onChange={handleFileNameChange}
              />
            </Col>
            <Col lg="2">
            </Col>
            <Col lg="5" className="form_content_div">
              <div class="container">
                <div className="row">
                  <div className="col align-self-center" xs={12} md={8}>
                    <span className="form__icon">
                      <VscJson />
                    </span>
                    <span className="label__important">*</span> Generated Code
                    <div className="code_block">
                      <CodeBlockComp data={genCodeProps} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="code_generator__generate-btn">
          <Col>
            <Button className="large_btn orange_red_gradiend_btn" onClick={handleGenerate}>
              {Loading ? (
                <div>
                  <AiOutlineLoading3Quarters className="code_generator__loader" />
                </div>
              ) : (
                  <div>
                  <VscGear /> Generate
                  </div>
              )}
            </Button>
          </Col>
        </Row>
        {inputError && (
          <Row className="code_generator__generate-btn">
            <Col>
              <Alert variant={"warning"}>
                <AiFillWarning /> Please Enter Valid Input.
              </Alert>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps)=>{
  return({
      ...ownProps,
      auth:state.auth,
      generatorReducer:state.generatorReducer
  })

}

export default connect(mapStateToProps,{codeGeneratorAPI})(CodeGeneratorPage);
