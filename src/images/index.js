import './index.css'

const Images = props => {
  const {send, changeTheStatusFunction} = props

  const {thumbnailUrl} = send

  const {id} = send

  const checking = () => {
    changeTheStatusFunction(id)
  }

  return (
    <li>
      <button className="imageButton" type="button" onClick={checking}>
        <img alt="thumbnail" src={thumbnailUrl} className="bottomImages" />
      </button>
    </li>
  )
}

export default Images
