import { ButtonPorps } from "./Button.types"
import './Button.scss';
function Button({type , onClick , icon , className}:ButtonPorps) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
        {icon}
    </button>
  )
}

export default Button