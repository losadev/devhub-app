import { memo, ReactNode } from 'react'
import { IconType } from 'react-icons'
import './index.css'

type Props = {
  Icon: IconType
  title: string
  numResources: number | string
  children: ReactNode 
}

const CategoryResource = memo(({Icon,title, numResources,children}: Props) => {
  return (
    <div className='container-category'>
      <section>
        <span className='bg-icon'>
          <Icon />
        </span>
          <span className='color-info'>
            <h3>{title}</h3>
            <p className='p-color-size'>{numResources} resources</p>
          </span>
      </section>
      {children}
    </div>
  )
});

export default CategoryResource