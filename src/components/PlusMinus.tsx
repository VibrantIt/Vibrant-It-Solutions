import React, { type ReactElement } from "react"

const PlusMinus = ({ open }: { open: boolean }): ReactElement => {
  return <div className={`plusminus ${open ? "button-active" : ""}`}></div>
}

export default PlusMinus
