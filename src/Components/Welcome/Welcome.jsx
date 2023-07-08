import Buttons from "../Buttons";

export default function Welcome({ Action }) {
  const StyledWelcome = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <>
      <div style={StyledWelcome} className="title_welcome">
        <h2
          style={{
            fontSize: "45px",
          }}
        >
          Welcome!!!
        </h2>
        <p>
          This project is a training exercise focused on UX and React.js. The
          main objective of the project is to create a login screen.
        </p>
        <Buttons Text="Back" Action={Action} />
      </div>
    </>
  );
}
