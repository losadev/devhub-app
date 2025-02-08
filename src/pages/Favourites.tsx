import ResourceCard from "../components/ResourceCard/ResourceCard"
import useResource from "../hooks/useResource"

const Favourites = () => {
  const {resources, removeResource,setFavourite} = useResource()
  const handleClickDelete = (id: number | string) => {
    removeResource(id)
  }

  const handleClickFav = (id: string | number) => {
    setFavourite(id)
  }

  return (
    <div className="container-resourceCard">
      {resources.length > 0 ? 
      resources.map((resource,index) => (
        resource.favourite && <ResourceCard id={resource.id} key={index} tag={resource.type} title={resource.title} url={resource.url} handleClickDelete={handleClickDelete} handleClickFav={handleClickFav} favourite={resource.favourite}/>
      )):<div style={{color:"#fff"}}>No resources available</div>}
    </div>
  )
}

export default Favourites