import './FilterBarMobile.scss';
import Select from "../Form_Components/Select/Select"
import { useViewPort } from '../../ContextApi/ViewPortContext';
import { useContext } from 'react';
import { AppContext } from '../../ContextApi/AppContext';

function FilterBarMobile() {
    const { isMobile } = useViewPort();
    const {state} = useContext(AppContext)
    let TimeOpts = [
        {
            label: "Any Time",
            value: 'any'
        },
        {
            label: "This Month",
            value: 'month'
        },
        {
            label: "this Year",
            value: "year"
        }
    ]
    if(state.videos.length && isMobile){
        return (
            <div className=" container filterMobile">
                <Select options={TimeOpts} />
                <Select options={TimeOpts} />
            </div>
        )
    }
    return null
}

export default FilterBarMobile