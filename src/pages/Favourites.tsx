import Button from "../components/Button/Button"
import ResourceCard from "../components/ResourceCard/ResourceCard"
import SearchBar from "../components/SearchBar/SearchBar"
import useResource from "../hooks/useResource"

const Favourites = () => {
  const {removeResource,setFavourite, openModal, searchResource, filteredResources} = useResource()
  const handleClickDelete = (id: number | string) => {
    removeResource(id)
  }

  const handleClickFav = (id: string | number) => {
    setFavourite(id)
  }

  return (
    <>
      <div className="input-btn-add">
      <SearchBar searchResource={searchResource}/>
      <Button openModal={openModal}/>
      </div>
      <div className="container-resourceCard">
        {filteredResources.length > 0 ? 
        filteredResources.map((resource,index) => (
          resource.favourite && <ResourceCard id={resource.id} key={index} tag={resource.type} title={resource.title} url={resource.url} handleClickDelete={handleClickDelete} handleClickFav={handleClickFav} favourite={resource.favourite}/>
        )):<div style={{color:"#fff"}}>No resources available</div>}
      </div>
    </>
  )
}

export default Favourites