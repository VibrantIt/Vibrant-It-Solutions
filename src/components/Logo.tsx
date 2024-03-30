import * as React from "react"
import { type SVGProps } from "react"

const LogoImg = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 37 40"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M34.921 10.379a6.333 6.333 0 0 1-3.219.873c-3.33 0-6.062-2.557-6.327-5.81l-9.973 19.423a5.373 5.373 0 1 0 9.56 4.91l9.959-19.396Z"
      clipRule="evenodd"
    />
    <mask
      id="b"
      width={25}
      height={34}
      x={0}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="M24.839 30.035c-1.052 2.054-3.26 1.626-3.95.247l-4.152-8.1-1.495-2.915-2.34-4.566a5.303 5.303 0 0 1 4.78-7.756h-12.3A5.303 5.303 0 0 0 .602 14.7l11.33 22.103c1.975 3.811 7.426 3.811 9.4 0l3.507-6.769Z"
      />
    </mask>
    <g mask="url(#b)">
      <path
        fill="url(#c)"
        d="M24.839 30.035c-1.052 2.054-3.26 1.626-3.95.247l-4.152-8.1-1.495-2.915-2.34-4.566a5.303 5.303 0 0 1 4.78-7.756h-12.3A5.303 5.303 0 0 0 .602 14.7l11.33 22.103c1.975 3.811 7.426 3.811 9.4 0l3.507-6.769Z"
      />
    </g>
    <mask
      id="d"
      width={15}
      height={14}
      x={12}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m15.218 19.267 9.744-.005c.94 0 1.551-.988 1.132-1.83l-3.81-7.635a5.3 5.3 0 0 0-7.155-2.251 5.303 5.303 0 0 0-2.251 7.155l2.34 4.566Z"
      />
    </mask>
    <g mask="url(#d)">
      <path
        fill="url(#e)"
        d="m15.218 19.267 9.744-.005c.94 0 1.551-.988 1.132-1.83l-3.81-7.635a5.3 5.3 0 0 0-7.155-2.251 5.303 5.303 0 0 0-2.251 7.155l2.34 4.566Z"
      />
    </g>
    <circle cx={31.708} cy={4.985} r={4.985} fill="url(#f)" />
    <defs>
      <linearGradient
        id="a"
        x1={27.952}
        x2={18.566}
        y1={1.012}
        y2={28.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#30C2DD" />
        <stop offset={1} stopColor="#093B9E" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={12.419}
        x2={12.419}
        y1={6.86}
        y2={39.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F6FEA" />
        <stop offset={0.344} stopColor="#2D6EEC" />
        <stop offset={0.698} stopColor="#2CCFD9" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={24.505}
        x2={12.396}
        y1={17.5}
        y2={10.437}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2ADDE9" />
        <stop offset={1} stopColor="#07349A" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={28.369}
        x2={28.747}
        y1={2.251}
        y2={9.246}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#30C2DD" />
        <stop offset={1} stopColor="#093B9E" />
      </linearGradient>
    </defs>
  </svg>
)
const Logo = ({ height }: { height: number }): React.ReactElement => {
  const width = (height * 36) / 40
  return (
    <div className="logo">
      <LogoImg height={height} width={width} />
      <div className="logo-text">
        <strong>Vibrant</strong>
        <small>IT Solutions</small>
      </div>
    </div>
  )
}

export default Logo
