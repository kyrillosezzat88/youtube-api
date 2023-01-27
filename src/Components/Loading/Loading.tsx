import Load from '../../Assets/images/loading.gif';
import './Loading.scss';
function Loading() {
  return (
    <div className='Loading'>
        <img src={Load} alt='Loading' />
        <h5>loading</h5>
    </div>
  )
}

export default Loading