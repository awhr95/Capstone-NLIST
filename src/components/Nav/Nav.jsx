import "./Nav.scss";

function Nav({ setOppType }) {
  return (
    <nav className="nav">
      <button
        onClick={() => {
          setOppType(null);
        }}
        className={"nav__links"}
      >
        Home
      </button>
      <button
        onClick={() => {
          setOppType("Charity");
        }}
        className={"nav__links"}
      >
        Charities
      </button>
      <button
        onClick={() => {
          setOppType("Event");
        }}
        className={"nav__links"}
      >
        Events
      </button>
      <button
        onClick={() => {
          setOppType("Community");
        }}
        className={"nav__links"}
      >
        Community
      </button>
      <button
        onClick={() => {
          setOppType("Individual");
        }}
        className={"nav__links"}
      >
        Individual
      </button>
      <button
        onClick={() => {
          setOppType("One-off");
        }}
        className={"nav__links"}
      >
        One-Off
      </button>
    </nav>
  );
}

export default Nav;
