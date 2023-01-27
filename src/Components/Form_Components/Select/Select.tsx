import { SelectProps } from './Select.types'
import './Select.scss';
function Select({options} : SelectProps) {
  return (
    <select>
        {options.map((opt , index) => 
            <option key={index} value={opt.value}>{opt.label}</option>
        )}
    </select>
  )
}

export default Select