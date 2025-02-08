import { ReactNode, useState } from "react"
import ResourceContext from "../context/Resource.context"
import { ResourceType } from "../types/Resource.type"

type Props = {
  children: ReactNode
}

const ResourceProvider = ({children}: Props) => {
  const [resources, setResources] = useState<ResourceType[]>([])
  const [isOpen,setIsOpen] = useState<boolean>(false)

  const addResource = (resource: ResourceType) => {
    setResources([resource,...resources])
  }

  const removeResource = (id: number|string) => {
    setResources(resources.filter(res => res.id !== id));
  }

  const getResource = (id: number | string): ResourceType | null => {
  return resources.find(r => r.id === id) || null;
}

  const setFavourite = (id: number | string) => {
    setResources(resources.map(res => 
      res.id === id ? { ...res, favourite: !res.favourite } : res
    ));
  }
  
  const onClose = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <ResourceContext.Provider value={{resources, addResource, removeResource, getResource, setFavourite, openModal,onClose, isOpen}}>
      {children}
    </ResourceContext.Provider>
  )
}


export default ResourceProvider 
