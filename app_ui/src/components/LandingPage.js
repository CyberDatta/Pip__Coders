import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import BulbImage from '../assets/img/bulb1.png';


const LandingPage = () => (
  <div className="new_component">
    <Container>
      <div className= "new_section">
        <Row>
          <Col md={6}>
            <div className="section__title">
              <h3 className="section_heading red_orange_gradient">
                Sample Title
              </h3>
            </div>
            <div className="section_content">
              <p>
              Before Halloween, many individuals carve a design into an orange-colored pumpkin, or a solid, durable vegetable. Once a personally satisfying design is carved, 
              a lit candle is typically put inside a pumpkin, thereby making it a Jack-O-Lantern. At night, this design lights up against the darkness.
              Besides carving pumpkins, some celebrate Halloween by putting decorations up. Supernatural (referring in this case to non-natural 
              creatures that're typically based in fiction) figures, including vampires, ghosts, werewolves, zombies, and more, generally account 
              for most of these decorations. Bugs, spiders, cobwebs, gravestones, and anything else that can be considered creepy (or unusual and 
              possibly scary) can also be found on Halloween, in decoration form.
              </p>
            </div>
          </Col>
          <Col md={6} className="section__image">
            <Image src={BulbImage} className="image_right" fluid/>
          </Col>
        </Row>
      </div>

      <div className= "new_section">
        <Row>
          <Col md={6} className="section__image">
            <Image src={BulbImage} className="image_right" fluid/>
          </Col>
          <Col md={6}>
            <div className="section__title">
              <h3 className="section_heading red_orange_gradient">
                Sample Title 2
              </h3>
            </div>
            <div className="section_content">
              <p>This is a sample paragraph</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>

  </div>
);

export default LandingPage;