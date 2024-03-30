import * as React from "react"

type NavButtonsProps = {
  endActive: boolean
  startActive: boolean
  clickPrev: Function
  clickNext: Function
}
// export const navigationPrevRef = React.useRef(null);
// export const navigationNextRef = React.useRef(null);

const NavButtons: React.FC<NavButtonsProps> = ({
  endActive,
  startActive,
  clickPrev,
  clickNext,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        gap: "20px",
        position: "relative",
        marginTop: "20px",
        paddingRight: "10px",
      }}
    >
      <button
        // ref={navigationPrevRef}
        style={{
          border: "none",
          background: "white",
          color: startActive ? "#676A7066" : "#676A70",
        }}
        onClick={() => clickPrev()}
      >
        <i className="icon-arrow-left" style={{ fontSize: "24px" }}></i>
      </button>
      <button
        // ref={navigationNextRef}
        style={{
          border: "none",
          background: "white",
          color: endActive ? "#676A7066" : "#676A70",
        }}
        onClick={() => clickNext()}
      >
        <i className="icon-arrow-right" style={{ fontSize: "24px" }}></i>
      </button>
    </div>
  )
}

export default NavButtons
