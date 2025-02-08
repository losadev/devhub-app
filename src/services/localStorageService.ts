import { ResourceType } from "../types/Resource.type";

export const addResourceToLocalStorage = (newResource: ResourceType) => {

  const existingResources = JSON.parse(localStorage.getItem("resources") || "[]");

  existingResources.push(newResource);

  localStorage.setItem("resources", JSON.stringify(existingResources));
};

export const getResourceFromLocalStorage = (): ResourceType[] => {
  const storedResources = localStorage.getItem("resources");
  return storedResources ? JSON.parse(storedResources) : [];
};


export const setResourceToFavouriteLocalStorage = (id: number | string) => {
  const existingResources: ResourceType[] = JSON.parse(localStorage.getItem("resources") || "[]");

  const updatedResources = existingResources.map(resource => 
    resource.id === id ? { ...resource, favourite: !resource.favourite } : resource
  );

  localStorage.setItem("resources", JSON.stringify(updatedResources));
};
