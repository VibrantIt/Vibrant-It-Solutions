import * as React from "react"

type Props = {
  content: string
  className: string
}
export const HTMLContent: React.FC<Props> = ({ content, className }: Props) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content: React.FC<Props> = ({ content, className }: Props) => (
  <div className={className}>{content}</div>
)

export default Content
