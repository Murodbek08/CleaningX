import "./hamburger.css";

const Switch = () => {
  return (
    <div>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </label>
    </div>
  );
};

export default Switch;
