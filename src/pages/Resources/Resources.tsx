import ResourceCard from "../../components/ResourceCard/ResourceCard"
import useResource from "../../hooks/useResource"
import './index.css'

const Resources = () => {
  const {resources} = useResource()
  return (
    <div className="container-resourceCard">
      {resources.map((resources,index) => (
        <ResourceCard key={index} tag={resources.type} title={resources.title} url={resources.url}/>
      ))}
    </div>
  )
}

export default Resources