import { useState } from 'react'
import './index.css'
import useResource from '../hooks/useResource'
import { ResourceType } from '../types/Resource.type'
import { addResourceToLocalStorage } from '../services/localStorageService'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({isOpen, onClose}: Props) => {
  const [title, setTitle] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [type, setType] = useState<string>('')
  const {addResource} = useResource();

  const handleClick = () => {
    const resource:ResourceType = {
      id:Math.floor(Math.random()*10),
      title: title,
      url: url,
      type: type,
      favourite: false
    }
    addResourceToLocalStorage(resource)
    addResource(resource);
  }

  if (!isOpen) return null

  return (
    <div className="bg-modal">
      <div className="container-modal">
      <h2>Add new resource</h2>
      <div className="info-modal">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
        </fieldset>
        <fieldset>
          <label htmlFor="url">URL</label>
          <input type="text" name="url" onChange={(e) => setUrl(e.target.value)}/>
        </fieldset>
        <fieldset>
          <label htmlFor="type">Type</label>
          <select name="type" onChange={(e) => setType(e.target.value)}>
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
        <button className='btn-add' onClick={handleClick}>Add Resource</button>
      </div>
      </div>
    </div>
  )
}

export default Modal