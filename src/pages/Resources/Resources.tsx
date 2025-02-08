import ResourceCard from "../../components/ResourceCard/ResourceCard"
import { getResourceFromLocalStorage } from "../../services/localStorageService"
import { ResourceType } from "../../types/Resource.type"
import './index.css'

const Resources = () => {
  const resources:ResourceType[] = getResourceFromLocalStorage();

  return (
    <div className="container-resourceCard">
      {resources.map((resources,index) => (
        <ResourceCard key={index} tag={resources.type} title={resources.title} url={resources.url}/>
      ))}
    </div>
  )
}

export default Resources