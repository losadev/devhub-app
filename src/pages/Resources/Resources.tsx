import ResourceCard from "../../components/ResourceCard/ResourceCard"
import useResource from "../../hooks/useResource"
import { setResourceToFavouriteLocalStorage } from "../../services/localStorageService"
import './index.css'

const Resources = () => {

  const { resources,removeResource, setFavourite} = useResource()
  const handleClickDelete = (id: number | string) => {
    removeResource(id)
  }

  const handleClickSetFavourite = (id: number | string) => {
    setFavourite(id)
    setResourceToFavouriteLocalStorage(id)
  }

  //const resources:ResourceType[] = getResourceFromLocalStorage() || [];

  return (
    <div className="container-resourceCard">
      {resources.length > 0 ? (
        resources.map((resource) => (
          <ResourceCard
            id={resource.id}
            key={resource.id} // Usar id en vez de index como key
            tag={resource.type}
            title={resource.title}
            url={resource.url}
            handleClickDelete={handleClickDelete}
            handleClickFav={handleClickSetFavourite}
            favourite={resource.favourite}
          />
        ))
      ) : (
        <div style={{color:"#fff"}}>No resources available</div>
      )}
    </div>
  )
}

export default Resources