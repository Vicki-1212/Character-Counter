import './index.css'

const UserInput = props => {
  const {listDetails} = props
  const {id, userEnteredText, textLength} = listDetails
  return (
    <li className="list-items">
      <p className="count-details">{userEnteredText} : {textLength}</p>
    </li>
  )
}

export default UserInput
