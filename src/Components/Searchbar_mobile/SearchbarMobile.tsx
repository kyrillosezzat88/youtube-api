import { ChangeEvent, useContext, useState } from 'react'
import { getVideos } from '../../Apis/api';
import LogoMobile from '../../Assets/images/logo_mobile.png'
import { AppContext } from '../../ContextApi/AppContext';
import Button from '../Form_Components/Button/Button';
import Input from '../Form_Components/Input/Input';
import SearchIcon from '../../Assets/Icons/search_white.svg';
import Close from '../../Assets/Icons/close.svg'
import './SearchbarMobile.scss'
import { useViewPort } from '../../ContextApi/ViewPortContext';
function SearchbarMobile() {
    const [term, setTerm] = useState<string>('');
    const [search, setSearch] = useState<Boolean>(true)
    const { dispatch } = useContext(AppContext);
    const { isMobile } = useViewPort()
    const HandleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    const HandleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({ type: "SEARCH_START", payload: true });

        await getVideos(term).then(res => {
            dispatch({ type: "SEARCH_RESULT", payload: res.data });
            setSearch(false)
        }).catch(error => {
            dispatch({ type: "SEARCH_ERROR", payload: error.message })
        })
    }

    const ClearTerm = () => setTerm("")
    const HandleShowSearch = () => setSearch(!search);
    // check if user on mobile or not 
    if (!isMobile) return null
    return (
        <div className="container SearchMobile">
            <img src={LogoMobile} alt="Youtube" className='SearchMobile_logo' />
            <form onSubmit={HandleSubmit} className='SearchMobile_form'>
                {search ?
                    <Input term={term} placeholder="Search" onChange={HandleSearchInput} size='sm' icon={term.length ? <img src={Close} alt="clear" width='18px' onClick={ClearTerm} /> : null} />
                    :
                    <p className='SearchMobile_form_term'>{term}</p>
                }
                <Button type='button' icon={<img src={SearchIcon} alt='Search' width='25px' />} onClick={HandleShowSearch} className='SearchMobile_form_btn' />
            </form>
        </div>
    )
}

export default SearchbarMobile