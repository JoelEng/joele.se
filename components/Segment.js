import './Segment.sass'
import Card from './Card'

export default function Segment(props) {
  function children() {
    return props.children.map( child => {
      return (
        <Card {...child.props} key={child.id}>
          {child}
        </Card>
      )
    })
  }

  return (
    <div className="Segment">
      <p className="Title">
        {props.title}
      </p>
      <div className="Card-list">
        {children()}
      </div>
    </div>
  )
}