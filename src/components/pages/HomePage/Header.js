import React from 'react'
import './Header.css'
import './Home.css'
function Header() {
    return (
      <div className="container">
      <div
        className="row home__hero-row"
        style={{
          display: "flex",
          flexDirection: "row" === "start" ? "row-reverse" : "row",
        }}
      >
        <div className="col">
          <div className="home__hero-text-wrapper">
            <div className="top-line">Helping passionate people develop exceptional technology</div>

            <h1 style={{fontSize
            :'48px'}}>
            For Individuals
            </h1>
            <p
              className=""
            >
             We help individuals transform their careers by teaching them the skills they need to become a full-stack software developer. 
            </p>
           
          </div>
        </div>
            {/* multistep form */}
  <div className="col form_one">
  <div className="home__hero-img-wrapper">
  <div className="pro_form">
<form id="msform">
  {/* <!-- progressbar --> */}
  <ul id="progressbar">
    <li className="active">Account Setup</li>
    <li>Social Profiles</li>
    <li>Personal Details</li>
  </ul>
  {/* <!-- fieldsets --> */}
  <fieldset>
    <h2 className="fs-title">Create your account</h2>
    <h3 className="fs-subtitle">This is step 1</h3>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Password" />
    <input type="password" name="cpass" placeholder="Confirm Password" />
    <input type="button" name="next" className="next action-button" value="Next" />
  </fieldset>
  <fieldset>
    <h2 className="fs-title">Social Profiles</h2>
    <h3 className="fs-subtitle">Your presence on the social network</h3>
    <input type="text" name="twitter" placeholder="Twitter" />
    <input type="text" name="facebook" placeholder="Facebook" />
    <input type="text" name="gplus" placeholder="Google Plus" />
    <input type="button" name="previous" className="previous action-button" value="Previous" />
    <input type="button" name="next" className="next action-button" value="Next" />
  </fieldset>
  <fieldset>
    <h2 className="fs-title">Personal Details</h2>
    <h3 className="fs-subtitle">We will never sell it</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" className="previous action-button" value="Previous" />
    <input type="submit" name="submit" className="submit action-button" value="Submit" />
  </fieldset>
</form>
        </div>
          </div>
        </div>
      </div>
    </div>
        
    )
}

export default Header
