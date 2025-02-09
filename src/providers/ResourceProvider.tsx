import { ChangeEvent, ReactNode, useEffect, useState } from "react"
import ResourceContext from "../context/Resource.context"
import { ResourceType } from "../types/Resource.type"

type Props = {
  children: ReactNode
}

const ResourceProvider = ({children}: Props) => {
  const [resources, setResources] = useState<ResourceType[]>([])
  const [isOpen,setIsOpen] = useState<boolean>(false)
  const [filteredResources, setFilteredResources] = useState<ResourceType[]>([]);

  useEffect(() => {
    setFilteredResources(resources);
  }, [resources]);

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
    setFilteredResources(resources.map(res => 
      res.id === id ? { ...res, favourite: !res.favourite } : res
    ));
  }
  
  const onClose = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const searchResource = (event: ChangeEvent<HTMLInputElement>) => {

    const searchedResources = event.target.value
      ? resources.filter((res) => res.title.includes(event.target.value))
      : resources;
    setFilteredResources(searchedResources);  // No modificar el estado de `resources`, solo el de `filteredResources`
  };

  return (
    <ResourceContext.Provider value={{resources, addResource, removeResource, getResource, setFavourite, openModal,onClose, isOpen,filteredResources,searchResource}}>
      {children}
    </ResourceContext.Provider>
  )
}


export default ResourceProvider 
