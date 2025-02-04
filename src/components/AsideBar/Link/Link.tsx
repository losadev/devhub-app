import { IconType } from 'react-icons';
import { Link } from "react-router-dom";

type Props = {
  path: string
  name: string
  Icon: IconType
}

const LinkAside = ({path,name,Icon}: Props) => {
  return (
    <>
    <Link className="link" to={path}><span><Icon size={24}/></span><span>{name}</span></Link>
    </>
  )
}

export default LinkAside