import Slider from "./Components/Slider";

export default function App() {
  return (
    <>
      <div className="container_main">
        <div className="form_section">
          <h1>Create an account</h1>
          <p>and get access to the latest releases with unique discounts</p>

          <form>
            <div>
              <input type="text" />
              <span>Name</span>
            </div>
            <div>
              <input type="email" />
              <span>Email</span>
            </div>
            <div>
              <input type="password" />
              <span>Password</span>
            </div>
          </form>
        </div>

        <div className="action_buttons_section">
          <div>
            <button>Create account</button>
          </div>

          <div>
            <span>ICON_GOOGLE</span>
            <button>Sign up with Google</button>
          </div>
          <div className="text_forgetPassword">
            <p>
              Already have an account? Log in <strong>Log in</strong>
            </p>
          </div>
        </div>

        <Slider />
      </div>
    </>
  );
}
