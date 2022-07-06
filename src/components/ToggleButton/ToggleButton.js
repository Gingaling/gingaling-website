export default function ButtonToggle(props) {
  return (
    <>
      <section className="buttonSection">
        <button
          id={`${props.isActiveButton ? "buttonStyle" : "null"}`}
          onClick={props.toggleFont}
        >
          <b>Font Size ✚</b>
        </button>
        <br></br>
        <button
          id={`${props.isActiveButton ? "buttonStyle" : "null"}`}
          onClick={props.togglecontrastStyle}
        >
          <b>Change Contrast</b>
        </button>{" "}
        <br></br>
        <button
          id={`${props.isActiveButton ? "buttonStyle" : "null"}`}
          onClick={props.toggleLtrSpacingStyle}
        >
          <b>Spacing ✚</b>
        </button>
      </section>
    </>
  );
}
