import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../Buttons";
import Welcome from "../Welcome/";

export default function Form({ toggleSlider }) {
  const [isWelcomeVisible, setWelcomeVisible] = useState(false);

  const handleButtonClick = () => {
    setWelcomeVisible(true);
    toggleSlider();
  };

  const handleBackButton = () => {
    setWelcomeVisible(false);
    toggleSlider();
  };

  return (
    <div>
      {isWelcomeVisible ? (
        <Welcome Action={handleBackButton} />
      ) : (
        <div className="form_section">
          <div className="title_form">
            <h1>Create an account</h1>
            <p>and get access to the latest releases with unique discounts</p>
          </div>

          <form className="form_elements">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <span className="focus_input" placeholder="Password"></span>
              <input type="password" placeholder="Password" />
            </div>
            <Buttons Text="Create account" Action={handleButtonClick} />
            <Buttons Text="Sign up with Google" logo={FcGoogle} />

            <div className="login_action">
              <div className="login_text">
                <p>
                  Already have an account? <strong>Log in</strong>
                </p>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
