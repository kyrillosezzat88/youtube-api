import { useState, ChangeEvent, useContext } from "react"
import './Search.scss';
import Button from "../Form_Components/Button/Button";
import Input from "../Form_Components/Input/Input"
import SearchIcon from '../../Assets/Icons/search.svg';
import YoutubeLogo from '../../Assets/images/youtube-logo.png'
import { AppContext } from "../../ContextApi/AppContext";
import { getVideos } from "../../Apis/api";
import { useViewPort } from "../../ContextApi/ViewPortContext";
import Progressbar from "../Progressbar/Progressbar";
function Searchbar() {
    const [term, setTerm] = useState<string>('');
    const [progressPercent, setProgressPercent] = useState<number>(0)
    const { dispatch } = useContext(AppContext);
    const { isMobile } = useViewPort();
    
    const HandleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    const HandleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle progressbar percentage 
        const percentInterval = setInterval(() => {
            setProgressPercent(oldValue => {
                const newValue = oldValue + 10;
                if (newValue === 100) {
                    clearInterval(percentInterval);
                }
                return newValue;
            });
        }, 500);

        dispatch({ type: "SEARCH_START", payload: true });
        // handle get videos api 
        await getVideos(term).then(res => {
            dispatch({ type: "SEARCH_RESULT", payload: res.data });
            clearInterval(percentInterval);
            setProgressPercent(100) // set presntage 100 after api success
            // after api success return progress percentage to 0 
            setTimeout(() => setProgressPercent(0), 1000)
        }).catch(error => {
            dispatch({ type: "SEARCH_ERROR", payload: error.message })
        })
    }
    if (isMobile) return null
    return (
        <div className="search">
            <Progressbar percent={progressPercent} />
            <div className="container">
                <div className="search__content">
                    <img src={YoutubeLogo} alt='youtube' width="150px" />
                    <form onSubmit={HandleSubmit} className='search__form'>
                        <Input term={term} placeholder="Search" onChange={HandleSearchInput} size='lg' />
                        <Button type="submit" icon={<img src={SearchIcon} alt='Search' />} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Searchbar