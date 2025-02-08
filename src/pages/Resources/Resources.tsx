import ResourceCard from "../../components/ResourceCard/ResourceCard"
import './index.css'

const Resources = () => {
  return (
    <div className="container-resourceCard">
      <ResourceCard tag="Frontend" title="Node.js Architecture and Design Principles" url="https://nodejs-architecture.example.com/design-principles"/>
      <ResourceCard tag="Frontend" title="Node.js Architecture and Design Principles" url="https://nodejs-architecture.example.com/design-principles"/>
      <ResourceCard tag="Frontend" title="Node.js Architecture and Design Principles" url="https://nodejs-architecture.example.com/design-principles"/>
      <ResourceCard tag="Frontend" title="Node.js Architecture and Design Principles" url="https://nodejs-architecture.example.com/design-principles"/>
    </div>
  )
}

export default Resources