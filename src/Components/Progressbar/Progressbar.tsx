import './Progressbar.scss';
import { ProgressbarProps } from './Progressbar.types';
function Progressbar({percent} : ProgressbarProps) {
  return (
    <div className={`progressbar progressbar_${percent}`}>
        <div className={`progressbar_percent progressbar_percent_${percent}`}></div>
    </div>
  )
}

export default Progressbar