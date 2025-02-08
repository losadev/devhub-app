import './index.css'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({isOpen, onClose}: Props) => {

  if (!isOpen) return null

  return (
    <div className="bg-modal">
      <div className="container-modal">
      <h2>Add new resource</h2>
      <div className="info-modal">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input type="text" name="title"/>
        </fieldset>
        <fieldset>
          <label htmlFor="url">URL</label>
          <input type="text" name="url"/>
        </fieldset>
        <fieldset>
          <label htmlFor="type">Type</label>
          <select name="type">
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="DevOps">DevOps</option>
            <option value="Design">Design</option>
            <option value="Tools">Tools</option>
          </select>
        </fieldset>
      </div>
      <div className="container-btn">
        <button className='btn-cancel' onClick={() => onClose()}>Cancel</button>
        <button className='btn-add'>Add Resource</button>
      </div>
      </div>
    </div>
  )
}

export default Modal