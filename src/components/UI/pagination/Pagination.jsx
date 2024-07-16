import React from 'react';
import './../../../styles/App.css'
import {getPagesArray} from "../../../utils/pages";

const Pagination = (props) => {
    let pagesArray = getPagesArray(props.totalPages)

    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => props.changePage(p)}
                    key={p}
                    className={props.page === p ? 'page page__current' : 'page'}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;