import React, { Component } from "react";
import JSONPretty from "react-json-pretty";
import JSONPrettyMon from "react-json-pretty/themes/monikai.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CodeBlock, dracula, monokai } from "react-code-blocks";
import "../../assets/css/code_block.css";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";

const data = {
  data: "import json\n\n\n\njson_data = %s\nsource_json = dotdict(json_data)\n\ntarget_json = {}\n\n\n\ntarget_json['SSN'] = .id\ntarget_json['CustomerFullName'] = .firstName + .lastName\ntarget_json['CustomerAddress'] = .address.street + .address.suite\ntarget_json['CustomerCity'] = .address.city\ntarget_json['CustomerZipCode'] = .address.zipcode\nenums = {\"self-employed\": \"SELF\", \"salaried\": \"FIXED INCOME\", \"other\": \"MISC\"}\ntarget_json['CustomerProfession'] = enums .occupation\ntarget_json['CustomerAge'] = .age\nprint(target_json)",
  language: "python",
};
let copyHandler = () => {
  toast.success("Copied to Clipboard");
};

let handleJsonFormat = (data) => {
  return (
    <div>
      <div className="code_block_div">
        <JSONPretty data={data.data} theme={JSONPrettyMon} />
      </div>
      <div className="code_block__copy">
        <CopyToClipboard text={JSON.stringify(data.data)}>
          <div className="form__btn">
            <button className="large_btn orange_red_gradiend_btn">
              <span className="code_block_icon">
                <AiOutlineCopy />
              </span>{" "}
              Copy
            </button>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

let handleXMLFormat = (data) => {
  return (
    <>
      {/* <CopyBlock
            text = {JSON.stringify(props.data.data)}
            theme={dracula}
            showLineNumbers={true}
            codeBlock
        /> */}
    </>
  );
};

let handlePythonComponent = (data) => {
  console.log(data);
  return (
    <>
      <div className="code_block_div">
        <CodeBlock
          text={data.data}
          theme={monokai}
          showLineNumbers={true}
          language="python"
          codeBlock
        />
      </div>
      <div>
        <CopyToClipboard text={data.data}>
          <div className="form__btn">
            <button
              className="large_btn orange_red_gradiend_btn"
              onClick={copyHandler}
            >
              <span className="code_block_icon">
                <AiOutlineCopy />
              </span>
              Copy
            </button>
          </div>
        </CopyToClipboard>
      </div>
    </>
  );
};

const CodeBlockComp = (props) => (
  <>
    <div className="new_component code_block_component">
      {console.log("########################")}
      {console.log(props.data)}
      {props.data.language == "json"
        ? handleJsonFormat(props.data)
        : handlePythonComponent(props.data)}
    </div>
  </>
);

export default CodeBlockComp;
