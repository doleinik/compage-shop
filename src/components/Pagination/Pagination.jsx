import React from 'react';
import {Link} from "react-router-dom";
import './Pagination.css'

const Pagination = ({postsPrePage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = []
    let activeCurrentPage = ''

    for (let i = 1; i <= Math.ceil(totalPosts / postsPrePage); i++) {
        pageNumbers.push(i);
    }


    return (
        <ul className={'pagination'}>
            {pageNumbers.map(number => (
                <li key={number} className={'page-item'}>
                    <Link onClick={() => paginate(number)} className={'page-link'} to="/">{number}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;