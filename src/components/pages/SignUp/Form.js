
import React from "react";


function Form() {
  return (
    <>


      <div className="wrapper">
        <div className="inner">
          <form action="" className='reg-form'>
            <h3>Please fill in this form to Apply!</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label for="">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrapper">
                <label for="">Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-wrapper">
              <label for="">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrapper">
              <label for="">Number</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-wrapper">

              <label for="state">
                This helps us tailor your preparation materials
            </label>
              <select className='drop' id="state" required>
                <option className="form-control" value="">Choose...</option>
                <option value="1" name="beginner">
                  I'm an absolute beginner
              </option>
                <option value="2" name="intermediate">
                  I've written some HTML and/or CSS
              </option>
                <option value="3" name="professional">
                  I've covered the basic of a programming language
              </option>
                <option value="4" name="expert">
                  I've gone beyond the basics of a programming language
              </option>
              </select>

            </div>
            <div className="form-wrapper">

              <label for="state">
                What best describes your coding experience?
            </label>
              <select className='drop' id="state" required>
                <option className="form-control" value="">Choose...</option>
                <option value="1" name="javascript">
                  Javascript
              </option>
                <option value="2" name="python">
                  Python
              </option>
                <option value="3" name="other">
                  Another Programming Language(e.g. Ruby, Python, Java
              </option>
              </select>

            </div>
            <h4>Where do you want to Study?</h4>
            <div className="checkbox" />
            <label>
              <input type="checkbox" /> Abuja
							<span className="checkmark"></span>
              <br />
              <input type="checkbox" /> Remote
							<span className="checkmark"></span>
            </label>
            <div className="checkbox" />
            <label>
              <input type="checkbox" /> I caccept the Terms of Use & Privacy Policy.
							<span className="checkmark"></span>
            </label>
            <button className='reg'>Register Now</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
