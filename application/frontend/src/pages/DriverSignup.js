import React from 'react';

const DriverSignup = () => {

  return (
      <div>
          <form id="registration" className="registration" method="POST" action="/users/register">
              <input className="login_input-field" id="redirect-input" type="hidden" name="redirect" />

              <fieldset className="login_fieldset-form2">
                  <legend className="login_page-title">Register my account</legend>
                  <login_label htmlFor="Drivername"> Driver Name
                      <input id="Drivername" className="login_input-field" type="text" placeholder="Driver Name" required name="Driver Name" />
                  </login_label>

                  <login_label htmlFor="chooseRestaurant" id="chooseRestaurant"> Choose a Restaurant
                      <select>
                          <option value="Choose a Restaurant" selected>Choose a Restaurant</option>
                          <option value="Indian">Indian</option>
                          <option value="Mexican">Mexican</option>
                          <option value="Pizza">Pizza</option>
                          <option value="Vietnamese">Vietnamese</option>
                      </select>
                  </login_label>

                  <login_label htmlFor="DriverContactNumber"> Driver Contact Number
                      <input id="DriverContactNumber" className="login_input-field" type="text" placeholder="Driver Contact Number" required name="Driver Contact Number" />
                  </login_label>

                  <login_label htmlFor="OwnerEmail"> Owner Email </login_label>
                  <input className="login_input-field" id="OwnerEmail" type="email" placeholder="Owner Email" required name="email" />

                  <login_label htmlFor="password"> Password
                      <input className="login_input-field" id="password" type="password" placeholder="Password" required name="Password" />
                  </login_label>

                  <login_label htmlFor="PassConfirmation"> Confirm Password
                      <input className="login_input-field" id="PassConfirmation" type="password" placeholder="Confirm Password" required name="cpassword" />
                  </login_label>

                  <br/>
                  <Link to="/DriverLogin">&nbsp;Have an account?</Link>
                  <br/>
                  <button type="submit" className="login_button" value="Register"> Sign up</button>
              </fieldset>
          </form>
      </div>
  );
};

export default DriverSignup