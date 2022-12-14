import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";
import {useEffect} from "react";
import Search from "../Search/Search";

const products = [
    {
        id: '1',
        title: 'Джинсы',
        price: 5000,
        description: 'Синего цвета, прямые',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '2',
        title: 'Куртка 2',
        price: 12000,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '3',
        title: 'Джинсы 3',
        price: 5000,
        description: 'Синего цвета, прямые',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '4',
        title: 'Куртка 4',
        price: 122,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '5',
        title: 'Джинсы 5',
        price: 5000,
        description: 'Синего цвета, прямые',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '6',
        title: 'Куртка 6',
        price: 600,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '7',
        title: 'Джинсы 7',
        price: 5500,
        description: 'Синего цвета, прямые',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '8',
        title: 'Куртка 8',
        price: 12000,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '9',
        title: 'Куртка 9',
        price: 12000,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '10',
        title: 'Куртка 10',
        price: 12000,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '11',
        title: 'Куртка 10',
        price: 12000,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '11',
        title: 'Куртка 10',
        price: 12000,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
    {
        id: '12',
        title: 'Куртка 10',
        price: 12000,
        description: 'Зеленого цвета, теплая',
        img: 'https://img3.akspic.ru/crops/7/0/2/1/5/151207/151207-chernyy-svet-noch-chernyj_i_belyj-temnota-1080x1920.jpg'
    },
]

const ProductList = () => {
    const [productsList, setProduct] = useState(products);
    const [searchTerm, setSearchTerm] = useState()
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPrePage] = useState(6);


    const filter = (searchText, listOfCars) => {
        if (!searchText){
            return listOfCars;
        }

        return listOfCars.filter(({title}) =>
            title.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    useEffect(() => {
        const Debounce = setTimeout(()=>{
            const filtered = filter(searchTerm, products);
            setProduct(filtered);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [searchTerm])

    useEffect(() => {
        setLoading(false);
    }, []);

    const indexOfLastPost = currentPage * postPrePage;
    const indexOfFirstPost = indexOfLastPost - postPrePage;
    const currentPosts = productsList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <input type="text"
                   className={'search'}
                   value={searchTerm}
                   autoFocus
                   onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={'list'}>
                {currentPosts.map(item => (
                    <ProductItem kay={item.id}
                                 product={item}
                                 className={'item'}
                                 loading={loading}
                                 curentPage={currentPage}
                    />
                ))}
            </div>
            <Pagination postsPrePage={postPrePage} totalPosts={productsList.length} paginate={paginate}/>
        </div>

    );
};

export default ProductList;
