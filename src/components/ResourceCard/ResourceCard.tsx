import './index.css'
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

type Props = {
  id: number | string
  title: string
  url: string
  tag:string
  handleClickDelete: (id:number | string) => void
  handleClickFav: (id: number | string) => void
  favourite: boolean
}

const ResourceCard = ({title,url, tag, handleClickDelete,handleClickFav,id, favourite}:Props) => {
  const tagStyles: React.CSSProperties = {
    backgroundColor: '',
    color: ''
  }
  const starStyles = {
    color: ''
  }

  if(tag === 'Frontend') {
    tagStyles.backgroundColor = 'lightblue';
    tagStyles.color = 'blue'; 
  }else if(tag === 'Backend') {
    tagStyles.backgroundColor = 'lightgreen';
    tagStyles.color = 'green'; 
  }else if(tag === 'DevOps') {
    tagStyles.backgroundColor = '#D3A6FF';
    tagStyles.color = 'purple'; 
  }else if(tag === 'Design') {
    tagStyles.backgroundColor = '#FF7F7F';
    tagStyles.color = 'red'; 
  }else if(tag === 'Tools') {
    tagStyles.backgroundColor = 'lightgray';
    tagStyles.color = 'gray'; 
  }

  if(favourite) {
    starStyles.color = 'yellow';
  }


const ResourceCard = ({title,url, tag}:Props) => {
  
  return (
    <div className='bg-resource-card'>
      <div className='title-star'>
        <h3>{title}</h3>
        <span className='icon'>
          {favourite ? <FaStar style={starStyles} onClick={() => handleClickFav(id)}/>:
            <FaRegStar className='icon-star' onClick={() => handleClickFav(id)}/>
          }
          </span>
      </div>
      <div className="tag-card">
        <span style={tagStyles}>{tag}</span>
      </div>
      <div className="tag-url">
        <a href={url}>{url}</a>
      </div>
      <div className="container-icons">
        <span className='icon icon-edit'><MdOutlineModeEdit /></span>
        <span className='icon icon-delete'><MdDelete onClick={() => {
          handleClickDelete(id);
        }}/>
        </span>
      </div>
    </div>
  )
}

export default ResourceCard