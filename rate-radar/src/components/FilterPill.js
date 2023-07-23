import { useState } from "react";

function FilterPill({filterCount, setFilterCount, filters, updateFilters, filterType, title}) {
    
    const [isActive, setIsActive] = useState(false);

    const forceUpdate = (key, value) => {
        let tmpFilters = {}

        for (let index in filters) {
            tmpFilters[index] = {}
            for (let value in filters[index]) {
                tmpFilters[index][value] = filters[index][value];
            }
        }

        tmpFilters[filterType][key] = value;
        
        if(value) {
            setFilterCount(filterCount+1);
            tmpFilters['counts'][filterType] = filters['counts'][filterType]+1;
        } else {
            setFilterCount(filterCount-1);
            tmpFilters['counts'][filterType] = filters['counts'][filterType]-1;
        }

        updateFilters(tmpFilters);
    };
    
    return (
        <div className={isActive ? 'filterPill filterPillSelected' : 'filterPill'} onClick={function(e){setIsActive(!isActive); forceUpdate(title, !isActive);}}>
            <p>{title}</p>
        </div>
    );
}

export default FilterPill