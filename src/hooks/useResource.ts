import { useContext } from "react";
import ResourceContext from "../context/Resource.context";

const useResource = () => {
  return useContext(ResourceContext);
}

export default useResource;