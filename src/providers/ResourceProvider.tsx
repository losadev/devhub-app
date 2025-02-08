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

  return (
    <ResourceContext.Provider value={{resources, addResource, removeResource}}>
      {children}
    </ResourceContext.Provider>
  )
}


export default ResourceProvider 
