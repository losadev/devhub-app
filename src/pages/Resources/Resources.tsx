import Button from "../../components/Button/Button"
import ResourceCard from "../../components/ResourceCard/ResourceCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import useResource from "../../hooks/useResource"
import './index.css'

const Resources = () => {

  const { removeResource, setFavourite,openModal,searchResource,filteredResources} = useResource()
  const handleClickDelete = (id: number | string) => {
    removeResource(id)
  }

  const handleClickSetFavourite = (id: number | string) => {
    setFavourite(id)
  }

  //const resources:ResourceType[] = getResourceFromLocalStorage() || [];

  return (
    <>
    <div className="input-btn-add">
    <SearchBar searchResource={searchResource}/>
    <Button openModal={openModal}/>
    </div>
    <div className="container-resourceCard">
      {filteredResources.length > 0 ? (
        filteredResources.map((resource) => (
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
    </>
  )
}

export default Resources