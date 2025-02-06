import './index.css'

type Props = {
  openModal: () => void
}

const Button = ({openModal}:Props) => {
  return (
    <button onClick={openModal}>
      <svg stroke="currentColor"  fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" data-pc-el-id="FiPlus-74-74" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
  )
}

export default Button