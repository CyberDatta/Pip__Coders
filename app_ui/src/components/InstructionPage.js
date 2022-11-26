import { Container } from "react-bootstrap";
import styles from "../assets/css/instructions.css";

const InstructionPage = () => {
  return (
    <div>
      <h2 className="section_heading red_orange_gradient main_heading">
        Instructions
      </h2>
      <Container className="form_content_div">
        <h3 className="instructions__heading">
          STANDARD FORMAT FOR SOURCE JSON OPERATIONS:
        </h3>
        <h5 className="instructions__heading">
          Instructions on creating the Mapping CSV File.
        </h5>
        <ol>
          <li>
            To access any child of an attribute in the Source JSON file, use the
            "." operator.
          </li>
          <li>Arithmetic Operators, +, -, *, /, are supported.</li>
          <li>Concatenation of strings can be done using the + operator.</li>
          <li>
            Based on if the last column of the CSV is an ENUM, the function "ENUM" can be used.
            <ul>
              <li>Inside it pass the access modifier.</li>
              <li>Use [] to create an ENUM not {`{}`}.</li>
            </ul>
          </li>
          <li>
            To employ conditional statements, use the following structure:
            <ul>
              <li>
                {"({THEN STATEMENT}) IF ({IF CONDITION}) ELSE ({ELSE CONDITION})"}
              </li>
            </ul>
          </li>
        </ol>
      </Container>
      <br />
    </div>
  );
};

export default InstructionPage;
