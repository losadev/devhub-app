import { ResourceType } from "../types/Resource.type";

export const addResourceToLocalStorage = (newResource: ResourceType) => {

  const existingResources = JSON.parse(localStorage.getItem("resources") || "[]");

  existingResources.push(newResource);

  localStorage.setItem("resources", JSON.stringify(existingResources));
};

export const getResourceFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("resources") || "[]");
}