import React, { Component } from 'react';
// import Header from './Header';

// import Subtitle from './Subtitle';
// import List from './List';
// import Form from './Form'
import './css/_Final.css';




class Final extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        fields: {},
        errors: {},
        touched: {},
        formSubmitted: false
     }

     this.handleSubmit = this.handleSubmit.bind(this);
   };

   handleChange(e){
     let fields = this.state.fields;
     fields[e.target.name] = e.target.value;
     this.setState({
       fields
     });
   }

   handleTouch(e){
     let{touched} = this.state;
     if(e.target.name&&touched[e.target.name]!=true){
       touched[e.target.name] = true;
       this.setState({
         touched
       });
     }
   }

   handleSubmit(e){
    e.preventDefault();

     this.setState({
       formSubmitted: true
     });
     if(this.validateForm()){
       let fields = {};
       let errors = {};
       fields["fname"] = "";
       fields["lname"] = "";
       fields["email"] = "";
       fields["pass"] = "";
       fields["cpass"] = "";
       fields["address"] = "";
       fields["pin"] = "";
       fields["file"] = "";
       fields["number"] = "";
       fields["skills"] = "";
       fields["yoe"] = "";
       this.setState({fields:fields});
       this.setState({
         formSubmitted: false
       });
      
      }
   }

   validateForm(){
     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;
     console.log(fields["fname"])
    //  if(!fields["fname"]){
    //    formIsValid = false;
    //    errors["fname"] = "*Please enter your username.";
    //  }

    // if(!fields["lname"]){
    //   formIsValid = false;
    //   errors["lname"] = "*Please enter your username.";
    // }

    if(typeof fields["fname"] !== "undefined"){
      if(!fields["fname"].match(/^[a-zA-Z]*$/)){
         formIsValid = false;
         errors["fname"] = "Only letters";
      }        
   }
   if(typeof fields["lname"] !== "undefined"){
       if(!fields["lname"].match(/^[a-zA-Z]*$/)){
          formIsValid = false;
          errors["lname"] = "Only letters";
       }        
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }
    
    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation+
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["pass"]) {
      formIsValid = false;
      errors["pass"] = "*Please enter your password.";
    }
    
    if (typeof fields["pass"] !== "undefined") {
      if (!fields["pass"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["pass"] = "*Please enter secure and strong password.";
      }
    }


    if (!fields["cpass"]) {
          formIsValid = false;
          errors["cpass"] = "*Please re-enter your password.";
        }
       
        if (typeof fields["cpass"] !== "undefined") {
          if (!fields["cpass"].match(this.state.fields["pass"]) ){
            formIsValid = false;
            errors["cpass"] = "Entered password does not match.";
          }
        }



   if(!fields["address"]){
      formIsValid = false;
      errors["address"] = "*Please enter your Address.";
   }
           
  if(typeof fields["address"] !== "undefined"){
     if(!fields["address"].match(/^[0-9a-zA-Z]*$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
      }     
  }


  if (!fields["pin"]) {
      formIsValid = false;
      errors["pin"] = "*Please enter your Pincode.";
  }
     
  if (typeof fields["pin"] !== "undefined") {
    if (!fields["pin"].match(/^[0-9]{6}$/)) {
      formIsValid = false;
      errors["pin"] = "*Please enter valid pincode";
    }
  }

  if (!fields["number"]) {
    formIsValid = false;
    errors["number"] = "*Please enter your mobile no.";
  }if (typeof fields["number"] !== "undefined") {
    if (!fields["number"].match(/^[0-9]{10}$/)) {
      formIsValid = false;
      errors["number"] = "*Please enter valid mobile no.";
    }
  }


  if(!fields["skills"]){
    formIsValid = false;
    errors["skills"] = "*Cannot be left empty.";
 }
         
if(typeof fields["skills"] !== "undefined"){
   if(!fields["skills"].match(/^[0-9a-zA-Z]*$/)){
        formIsValid = false;
        errors["skills"] = "Only letter";
    }     
}

  if (!fields["yoe"]) {
    formIsValid = false;
    errors["yoe"] = "Please enter Years of Experience.";
   }
     
         if (typeof fields["yoe"] !== "undefined") {
           if (!fields["yoe"].match(/^[0-9]*$/)) {
             formIsValid = false;
             errors["yoe"] = "Please enter a positive number. ";
           }
         }

  
   
         if (typeof fields["file"] !== "defined") {
          //  var ext = fields["file"].substring(fields["file"].lastIndexOf('.') + 1);
      //  if(ext !== "pdf" || ext !== "txt" || ext !== "JPEG" || ext !== "jpeg" || ext !== "jpg" || ext !== "JPG" || ext !== "doc")
      var fileInput = document.getElementById('file');
        var filePath = fileInput.value;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.txt|\.pdf|\.JPEG|\.JPG|\.doc|\.docx)$/i;
        if(!allowedExtensions.exec(filePath)) 
      {
         
             formIsValid = false;
             errors["file"] = "*Please upload a valid file(.txt, .jpeg, .jpg, .JPG, .doc)";
           }
         }
       
  
  this.setState({
    errors: errors
  });
  return formIsValid;

}
    
   


  render() {
    return (
      <div>
        <div id = 'back'><a href = '#'>&#x3c;  Back</a></div>
            <nav className = 'bg-color'>
              <h1 className = 'text'>Join our Network of Top Expert Mentors for Extra Curriculum Activities!</h1>
            </nav>
            <div className="Siderow">
                <div className="Sidecolumn">
                  <div className = 'subtitle'>               
                        <h3 className = "subtitle_text">
                            <p> 
                            KidsFuture provides One-to-One Extra Curriculum Activity<br></br>
                            Mentorship to Unlock the Kid's Potential at an Early Stage...!
                            </p>
                        </h3>
                        <ul className = 'list_text'>
                          <li><span>&#x2666;</span>Sign Up as a Mentor and Introduce Yourself for Free!</li>
                          <hr id = 'h'/>
                          <li><span>&#x2666;</span>Set Your Availablities with Flexible Commitment...</li>
                          <hr id = 'h'/>
                          <li><span>&#x2666;</span>Set Your Session Pricing</li>
                          <hr id = 'h'/>
                          <li><span>&#x2666;</span>Promote your mentoring through our Advertising module<br/>
                                                for parents to find you easily, and stand out in audience</li>
                          <hr id = 'h'/>
                          <li><span>&#x2666;</span>Track, manage and measure the success of your mentoring<br/>
                                                   programs with one-click reports from our Dashboard</li> 
                        </ul>
                  </div>
                </div>
                <div className="Sidecolumn">
                
                  <div className = 'form_body'>
                        <h2 id = 'form_text'>Sign Up A s a Mentor</h2>
                            <form name = 'submit' onSubmit = {this.handleSubmit}>
                                <div>
                                    <input type = 'text' placeholder = 'First Name' id = 'username' name = 'fname' value = {this.state.fields.fname} onChange = {(e) => {this.handleChange(e);}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    
                                    <input type = 'text' placeholder = 'Last Name' id = 'username' name = 'lname' value = {this.state.fields.lname} onChange = {(e) => {this.handleChange(e);}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                </div>
                                <div>
                                    <input type = 'email' placeholder = 'Email' id = 'info' name = 'email' value = {this.state.fields.email} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.email?<div className = 'errorMsg'>{this.state.errors.email}</div>:''}
                                   
                                    <input type = 'password' placeholder = 'Password'  id = 'info' name = 'pass' value = {this.state.fields.pass} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.pass?<div className = 'errorMsg'>{this.state.errors.pass}</div>:''}
                                   
                                    <input type = 'password' placeholder = 'Confirm Password'  id = 'info' name = 'cpass' value = {this.state.fields.cpass} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.cpass?<div className = 'errorMsg'>{this.state.errors.cpass}</div>:''}
                                   
                                    <input type = 'text' placeholder = 'Communication Address'  id = 'info' name = 'address' value = {this.state.fields.address} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.address?<div className = 'errorMsg'>{this.state.errors.address}</div>:''}
                                   
                                    <input type = 'text' placeholder = 'Pin Code'  id = 'info' name = 'pin'value = {this.state.fields.pin} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.pin?<div className = 'errorMsg'>{this.state.errors.pin}</div>:''}
                                   
                                    <input type = 'text' placeholder = 'Contact Number'  id = 'info' name = 'number' value = {this.state.fields.number} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.number?<div className = 'errorMsg'>{this.state.errors.number}</div>:''}
                                   
                                    <div class="custom-file-input" >
                                        <input type="file" id = 'file'  ref = "file" name = 'file' value = {this.state.fields.inpfile} onChange = {(e) => {this.handleChange(e);}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}}  required/>
                                        <input type="text" placeholder = 'Your Id proof' id = 'l' required/>
                                        <input type="button" value="Browse" id = 'b'/>
                                    </div>
                                    {this.state.formSubmitted?<div className = 'errorMsg'>{this.state.errors.file}</div>:''}
                                    
                          

                              

                                    <input type = 'text' placeholder = 'Mentoring Skills'  id = 'info' name = 'skills' value = {this.state.fields.skills} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.skills?<div className = 'errorMsg'>{this.state.errors.skills}</div>:''}
                                   
                                    <input type = 'text' placeholder = 'Years of Experience'  id = 'info' name = 'yoe' value = {this.state.fields.yoe} onChange = {(e) => {this.handleChange(e);this.validateForm();}} onBlur = {(e) => {this.handleTouch(e);this.validateForm();}} required/>
                                    {this.state.formSubmitted||this.state.touched.yoe?<div className = 'errorMsg'>{this.state.errors.yoe}</div>:''}
                                
                                </div>
                                 <button id = 'btn'>Join Our Network of Top Expert Mentors!</button>
                                 <p id = 'signin'>By signing up, you are agreeing to our <a href = "#"><temp>Privacy Policy</temp></a> and <br/>
                                           <a href = '#'> <temp>Terms and Conditions</temp></a></p>
                            </form>
                    </div>
                  
                </div>
            </div>
       </div>
    )
  }
}

export default Final






// <div className="file-upload " id = 'bt_body'>
//                                       <div className="file-select">
//                                       <div className="file-select-name" id="noFile">No file chosen...</div>  
//                                       <div className="file-select-button" id="fileName">Choose File</div>
                                         
//                                         <input type="file" name="chooseFile" id="chooseFile"/>
//                                       </div>
//                                     </div