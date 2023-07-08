import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../Buttons";
import Welcome from "../Welcome/";

export default function Form({ toggleSlider }) {
  const [isWelcomeVisible, setWelcomeVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    if (name === "" || email === "" || password === "") {
      return window.alert(
        "Os Campos foram preenchidos incorretamente, verifique e tente novamente!"
      );
    }

    setWelcomeVisible(true);
    toggleSlider();
  };

  const handleBackButton = () => {
    setWelcomeVisible(false);
    toggleSlider();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container_main">
      {isWelcomeVisible ? (
        <Welcome Action={handleBackButton} />
      ) : (
        <div className="form_container">
          <div className="form_section">
            <div className="title_form">
              <h1>Create an account</h1>
              <p>and get access to the latest releases with unique discounts</p>
            </div>

            <form className="form_elements">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                  className={name ? "filled" : ""}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className={email ? "filled" : ""}
                />
              </div>

              <div>
                <span className="focus_input" placeholder="Password"></span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={password ? "filled" : ""}
                />
              </div>

              <div className="login_action">
                <div className="login_text">
                  <div className="button_container">
                    <Buttons Text="Create account" Action={handleButtonClick} />
                    <Buttons Text="Sign up with Google" logo={FcGoogle} />
                  </div>
                  <p id="login_description">
                    Already have an account? <strong>Log in</strong>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
