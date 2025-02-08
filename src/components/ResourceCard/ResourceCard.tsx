import './index.css'
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

type Props = {
  title: string
  url: string
  tag:string
}

const ResourceCard = ({title,url, tag}:Props) => {
  
  return (
    <div className='bg-resource-card'>
      <div className='title-star'>
        <h3>{title}</h3>
        <span className='icon'><FaRegStar className='icon-star'/></span>
      </div>
      <div className="tag-card">
        <span>{tag}</span>
      </div>
      <div className="tag-url">
        <a href={url}>{url}</a>
      </div>
      <div className="container-icons">
        <span className='icon icon-edit'><MdOutlineModeEdit/></span>
        <span className='icon icon-delete'><MdDelete /></span>
      </div>
    </div>
  )
}

export default ResourceCard