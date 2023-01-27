import './Input.scss';
import { InputProps } from './Input.types';

function Input({term , placeholder , onChange , size , icon} : InputProps) {
  return (
    <div className={` inpt inpt-${size}`}>
      <input type="text" value={term} placeholder={placeholder} onChange={onChange} />
      {icon&&icon}
    </div>
  )
}

export default Input