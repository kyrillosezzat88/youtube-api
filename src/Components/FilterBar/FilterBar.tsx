import './FilterBar.scss';
import FilterIcon from '../../Assets/Icons/filter.svg';
import { useContext } from 'react';
import { AppContext } from '../../ContextApi/AppContext';
import { useViewPort } from '../../ContextApi/ViewPortContext';
function FilterBar() {
    const { state } = useContext(AppContext);
    const {isMobile} = useViewPort();
    if(state.videos.length && !isMobile){
        return (
            <div className="container filter_bar">
                <p className="filter_bar_result">
                    About {state.pageInfo.totalResults} filtrated results
                </p>
                <div className="filter_bar_btn">
                    <img src={FilterIcon} alt="filter" />
                    <p>Filter</p>
                </div>
            </div>
        )
    }
    return null
}

export default FilterBar