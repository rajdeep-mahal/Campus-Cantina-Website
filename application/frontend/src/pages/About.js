import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h4>(Styling will be changed later to match rest of app)</h4>
      <br/>
      <Link to='/rajdeep'>Rajdeep Singh</Link> - Team Lead
      <br/>
      <Link to='/rinay'>Rinay Kumar</Link> - Backend Lead
      <br/>
      <Link to='/bhavani'>Bhavani Goruganthu</Link> - Frontend Lead
      <br/>
      <Link to='/frederick'>Frederick White</Link>
      <br/>
      <Link to='/german'>German Perez</Link>
      <br/>
      <Link to='/henzon'>Henzon Zambrano</Link>
    </div>
  );
};

export default About;