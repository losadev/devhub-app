import { createContext } from "react";
import { ResourceType } from "../types/Resource.type";

type ResourceContextType = {
  resources: ResourceType[];
  addResource: (resource: ResourceType) => void;
  removeResource: (id: number | string) => void;
  getResource: (id: number | string) => void;
  setFavourite: (id:number | string) => void;
}

export default createContext<ResourceContextType>({} as ResourceContextType)