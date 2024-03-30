import * as React from "react"

type SolutionProps = NonNullable<Queries.CommonJsonSolution>

const Solution = (props: NonNullable<SolutionProps>): React.ReactElement => (
  <div className="solution">
    <div className="sleft">
      <img src={props.image!} alt="" />
    </div>
    <div className="sright">
      <h2>
        <span className="head1">{props.title}</span>&nbsp;
        <span className="head2">{props.titleHighlight}</span>
      </h2>
      <p>{props.description}</p>
      <a href="/contact" className="Cbutton">
        {props.button?.buttonText} <img src={props.button?.icon!} alt="" />
      </a>
    </div>
  </div>
)

export default Solution
