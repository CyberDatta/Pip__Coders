import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Image, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {AiOutlineMail, AiOutlineUser} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';

import {signUp} from '../actions/index';
import history from '../history';
import '../assets/css/forms.css';



class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name:"",
        email:"",
        password:"",
        errors:{
            email:"",
            password:"",
            name:""
        }
    }
  }
  componentDidMount(){
      if(this.props.auth.isSignedIn){
          history.push('/')
      }
  }
  handleInputChange=(event)=>{
      const target = event.target;
      const name = target.name;
      this.setState({
        [name]: event.target.value
      });
  }
  validateForm = (data)=>{
      const {email, password, name} = data;
      let emailError="",passwordError="", nameError = "", error=false;
      if(!email){
          emailError = "Email is required";
          error = true;            
      }
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      {
          emailError = "Email address is Invalid";
          error= true;
      }
      if(!password.trim())
      {
          passwordError="Password is required"
          error= true;
      }
      else if(password.length<6)
      {
          passwordError="Password must be 6 or more characters long"
          error= true;
      }
      
      // if(!name){
      //   nameError = "Name is required";
      //   error = true;
      // }

      this.setState(prevState => ({
          errors:{
              email:emailError,
              password: passwordError,
              name:nameError
          }
      }))
      
      return !error;
  }

  notifyFail = (message) => toast.error(message);

  handleSubmit = async(event)=> {
      event.preventDefault();
      const isValid = this.validateForm(this.state);
      if(isValid){
          const {email,password, name} = this.state;
          const data = {
            username: email,
            password: password
          }
          await this.props.signUp(data);
          // await this.props.signUp({name, email, password});

      //     if(this.props.auth.error){
      //         // this.notifyFail(this.props.auth.error);
      //     }
      }
      
  }

render(){
  return (
    <>
    <ToastContainer/>
    <div className="new_component">
    <Container>
      <div className= "new_section">
        <Col md={6} className="form_content_div login_form_div">
          <Row>
            <h2 className="form_heading red_orange_gradient">Sign up</h2>
          </Row>

          <Form>
            {/* <Form.Group controlId="formBasicName" className="form_field_div">
                <Form.Label><span className="form__icon"><AiOutlineUser/></span><span className="label__important">*</span> Name</Form.Label>
                <input name="name" className="form-control" type="text" value={this.state.email} placeholder="Enter name" onChange={this.handleInputChange} />
                <div className="invalid__feedback">{this.state.errors.name}</div>
            </Form.Group> */}

            <Form.Group controlId="formBasicEmail" className="form_field_div">
                <Form.Label><span className="form__icon"><AiOutlineMail/></span><span className="label__important">*</span> Email address</Form.Label>
                <input name="email" className="form-control" type="email" value={this.state.email} placeholder="Enter email" onChange={this.handleInputChange} />
                <div className="invalid__feedback">{this.state.errors.email}</div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="form_field_div">
                <Form.Label><span className="form__icon"><RiLockPasswordFill/></span><span className="label__important">*</span> Password</Form.Label>
                <div className="muted_text--forms"> Password must be at least 6 characters.</div>
                <input name="password" className="form-control" type="password" value={this.state.password} placeholder="Password must be at least 6 characters" onChange={this.handleInputChange} />
                <div className="invalid__feedback">{this.state.errors.password}</div>
                
            </Form.Group>
            <div className="form__btn">
                <button className="large_btn orange_red_gradiend_btn" type="submit" onClick={this.handleSubmit}>
                    Sign up
                </button>
            </div>
          </Form>
                    
          <div className="form__other__text">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </Col>
      </div>

      
    </Container>

  </div>
  </>
  );
}


}




const mapStateToProps = (state, ownProps)=>{
  return({
      ...ownProps,
      auth:state.auth
  })

}

export default connect(mapStateToProps,{signUp})(SignUp);