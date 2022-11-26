import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Image, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';

import {signIn} from '../actions/index';
import history from '../history';
import '../assets/css/forms.css';



class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        email:"",
        password:"",
        errors:{
            email:"",
            password:""
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
      const {email, password} = data;
      let emailError="",passwordError="", error=false;
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
      
      this.setState(prevState => ({
          errors:{
              email:emailError,
              password: passwordError
          }
      }))
      
      return !error;
  }

  notifyFail = (message) => toast.error(message);

  handleSubmit = async(event)=> {
      event.preventDefault();
      const isValid = this.validateForm(this.state);
      if(isValid){
          const {email,password} = this.state;
          const data = {
            username:email, 
            password
          }
          await this.props.signIn(data);

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
            <h2 className="form_heading red_orange_gradient">Login</h2>
          </Row>

          <Form>
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
                    Login
                </button>
            </div>
          </Form>
                    
          <div className="form__other__text">
            New user? <Link to="/signup">Sign Up</Link>
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

export default connect(mapStateToProps,{signIn})(LoginPage);