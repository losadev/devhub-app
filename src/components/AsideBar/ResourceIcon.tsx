type Props = {
  height?: number | string
  width?: number | string
}

function ResourceIcon({height, width}:Props) {
  return (
    <>
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" data-pc-el-id="FiBook-38-38" height={height} width={width} xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    </>
  )
}

export default ResourceIcon