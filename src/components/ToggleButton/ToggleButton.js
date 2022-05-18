export default function ButtonToggle(props) {
  return (
    <>
      <section className="buttonSection">
        <button
          id={`${props.isActiveButton ? "buttonStyle" : "null"}`}
          onClick={props.toggleFont}
        >
          Font Size ✚
        </button>
        <br></br>
        <button
          id={`${props.isActiveButton ? "buttonStyle" : "null"}`}
          onClick={props.togglecontrastStyle}
        >
          Change Contrast
        </button>{" "}
        <br></br>
        <button
          id={`${props.isActiveButton ? "buttonStyle" : "null"}`}
          onClick={props.toggleLtrSpacingStyle}
        >
          Spacing ✚
        </button>
      </section>
    </>
  );
}
