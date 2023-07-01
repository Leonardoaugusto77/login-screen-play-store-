import Slider from "./Components/Slider";

export default function App() {
  return (
    <>
      <div className="container_main">
        <div className="form_section">
          <div className="title_form">
            <h1>Create an account</h1>
            <p>and get access to the latest releases with unique discounts</p>
          </div>

          <form>
            <div>
              <span>Name</span>
              <input type="text" />
            </div>
            <div>
              <span>Email</span>
              <input type="email" />
            </div>
            <div>
              <span>Password</span>
              <input type="password" />
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
          </form>
        </div>

        <div className="slider_section">
          <Slider />
        </div>
      </div>
    </>
  );
}
