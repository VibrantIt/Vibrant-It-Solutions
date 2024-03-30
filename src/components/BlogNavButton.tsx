import * as React from "react"

type BlogNavButtonProps = {
  clickPrev: Function
  clickNext: Function
}

const BlogNavButton: React.FC<BlogNavButtonProps> = ({
  clickPrev,
  clickNext,
}) => {
  return (
    <div className="reads">
      <h2>
        <span className="head1">More</span>&nbsp;
        <span className="head2">Reads</span>
      </h2>
      <div className="icons">
        <img
          onClick={() => clickPrev()}
          src="/images/blog/Vector (2).svg"
          alt=""
        />
        <img
          onClick={() => clickNext()}
          src="/images/blog/Vector (3).svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default BlogNavButton
