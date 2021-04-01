import React from 'react';

const OwnerSignup = () => {

  return (
      <div>
          <form id="registration" className="registration" method="POST">
              <input className="login_input-field" id="redirect-input" type="hidden" name="redirect" />
              <fieldset className="login_fieldset-form2">

                  <legend className="login_page-title">Register Restaurant account</legend>
                  <login_label htmlFor="name"> Restaurant Name
                      <input id="name" className="login_input-field" type="text" placeholder="Restaurant Name" required name="Restaurant Name" />
                  </login_label>

                  <login_label htmlFor="address"> Restaurant Address
                      <input id="address" className="login_input-field" type="text" placeholder="Restaurant Address" required name="Restaurant Address" />
                  </login_label>

                  <login_label htmlFor="contactNumber"> Restaurant Address
                      <input id="contactNumber" className="login_input-field" type="text" placeholder="Restaurant Contact Number" required name="Restaurant Contact Number" />
                  </login_label>

                  <login_label htmlFor="email"> Email </login_label>
                  <input className="login_input-field" id="email" type="email" placeholder="Email" required name="email" />

                  <login_label htmlFor="password"> Password
                      <input className="login_input-field" id="password" type="password" placeholder="Password" required name="Password" />
                  </login_label>

                  <login_label htmlFor="PassConfirmation"> Confirm Password
                      <input className="login_input-field" id="PassConfirmation" type="password" placeholder="Confirm Password" required name="cpassword" />
                  </login_label>
                  <br/>

                  <Link to="/OwnerLogin">&nbsp;Have an account?</Link>
                  <br/>

                  <button type="submit" className="login_button" value="Register"> Sign up</button>
              </fieldset>
          </form>
      </div>
  );
};

export default OwnerSignup