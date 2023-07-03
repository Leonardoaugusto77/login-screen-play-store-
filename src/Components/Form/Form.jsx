import Buttons from "../Buttons";
import { FcGoogle } from "react-icons/fc";

export default function Form() {
  return (
    <div className="container_main">
      <div className="form_section">
        <div className="title_form">
          <h1>Create an account</h1>
          <p>and get access to the latest releases with unique discounts</p>
        </div>

        <form className="form_elements">
          <div>
            <span>Name</span>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <span>Email</span>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <span>Password</span>
            <input type="password" placeholder="Password" />
          </div>
          <Buttons Text="Create account" />
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
    </div>
  );
}
