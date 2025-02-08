import ResourceCard from "../../components/ResourceCard/ResourceCard"
import useResource from "../../hooks/useResource"
import './index.css'

const Resources = () => {
  const {resources, removeResource, setFavourite} = useResource()
  const handleClickDelete = (id: number | string) => {
    removeResource(id)
  }

  const handleClickSetFavourite = (id: number | string) => {
    setFavourite(id)
  }

  return (
    <div className="container-resourceCard">
      {resources.map((resource,index) => (
        <ResourceCard id={resource.id} key={index} tag={resource.type} title={resource.title} url={resource.url} handleClickDelete={handleClickDelete} handleClickFav={handleClickSetFavourite} favourite={resource.favourite}/>
      ))}
    </div>
  )
}

export default Resources