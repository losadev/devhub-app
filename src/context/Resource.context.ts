import { ChangeEvent, createContext } from "react";
import { ResourceType } from "../types/Resource.type";

type ResourceContextType = {
  resources: ResourceType[];
  filteredResources: ResourceType[];
  addResource: (resource: ResourceType) => void;
  removeResource: (id: number | string) => void;
  getResource: (id: number | string) => ResourceType | null;
  setFavourite: (id:number | string) => void;
  openModal: () => void
  onClose: () => void
  searchResource: (event:ChangeEvent<HTMLInputElement>) => void
  isOpen: boolean
}

export default createContext<ResourceContextType>({} as ResourceContextType)