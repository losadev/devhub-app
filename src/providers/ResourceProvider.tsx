import { ReactNode, useState } from "react"
import ResourceContext from "../context/Resource.context"
import { ResourceType } from "../types/Resource.type"

type Props = {
  children: ReactNode
}

const ResourceProvider = ({children}: Props) => {
  const [resources, setResources] = useState<ResourceType[]>([])

  const addResource = (resource: ResourceType) => {
    setResources([resource,...resources])
  }

  const removeResource = (id: number|string) => {
    setResources(resources.filter(res => res.id !== id));
  }

  const getResource = (id: number | string) => {
    return resources.find(r => r.id == id);
  }

  const setFavourite = (id: number | string) => {
    setResources(resources.map(res => 
      res.id === id ? { ...res, favourite: !res.favourite } : res
    ));
  }


  return (
    <ResourceContext.Provider value={{resources, addResource, removeResource, getResource, setFavourite}}>
      {children}
    </ResourceContext.Provider>
  )
}


export default ResourceProvider 
