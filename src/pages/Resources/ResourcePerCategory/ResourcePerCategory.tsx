import { useParams } from 'react-router-dom';
import '../index.css';
import ResourceCard from '../../../components/ResourceCard/ResourceCard';
import useResource from '../../../hooks/useResource';

const ResourcesPerCategory = () => {
  const { category } = useParams();
  const { resources,setFavourite, removeResource } = useResource();

  const filteredResources = resources.filter((resource) => resource.type.toLowerCase() === category?.toLowerCase());

  return (
    <div className="container-resources">
      <h1 style={{color:"#fff"}}>Resources in {category} Category</h1>
      <div className="container-resourceCard">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard
            id={resource.id}
              key={resource.id}
              tag={resource.type}
              title={resource.title}
              url={resource.url}
              favourite={resource.favourite}
              handleClickDelete={removeResource}
              handleClickFav={setFavourite}
            />
          ))
        ) : (
          <div style={{color:"#fff"}}>No resources available in this category.</div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPerCategory;
