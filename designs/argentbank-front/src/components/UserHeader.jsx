import '../css/main.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../utils/actions/'

export default function UserHeader() {
  const dispatch = useDispatch()

  const { firstName } = useSelector((state) => state.userProfile)
  const { lastName } = useSelector((state) => state.userProfile)
  const { userName } = useSelector((state) => state.userProfile)
  const { token } = useSelector((state) => state.userLogin)
  const { success } = useSelector((state) => state.userLogin)

  const [newUsername, setNewUsername ] = useState()

  const [editButton, setEditButton] = useState('')

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProfile(token, newUsername))
    if (success) {
      setEditButton((current) => !current)
    }
  }

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
            <input
                type="text"
                placeholder={userName}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{userName}</p>
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}