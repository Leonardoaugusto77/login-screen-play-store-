export default function Buttons({ Text, logo: Logo }) {
  return (
    <>
      <div className="action_buttons_section">
        <div className="create_account_button">
          <button>
            {Logo && <Logo size={30} style={{ marginRight: "5px" }} />}
            <span>{Text}</span>
          </button>
        </div>
      </div>
    </>
  );
}
