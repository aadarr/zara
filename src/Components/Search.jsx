import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProduct } from '../Redux/App/action';
import ProductCard from './ProductCard';

const Search = () => {
    const [text, setText] = useState('');
    const [val, setVal] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch();
    const { products } = useSelector((store) => (store.AppReducer));

    useEffect(() => {
        dispatch(getProduct(`product.json`)).then(() => {
            // Filter products after fetching
            setFilteredProducts(products);
        });
    }, [dispatch]);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const searchTerm = text.toLowerCase();
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
            setFilteredProducts(filtered);
            setVal(true);
        }
    };

    return (
        <>
            <Container>
                <div className='searchBox'>
                    <input
                        type="text"
                        placeholder='Enter Search Term'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyUp={(e) => handleSearch(e)}
                    />
                    {val && <p style={{ textAlign: "left" }}>{filteredProducts.length} Result Shown</p>}
                </div>

                {val && (
                    <div className='productSection'>
                        <ProdContainer>
                            <div className="gridlayout">
                                {filteredProducts.map((item) => (
                                    <ProductCard key={item.id} id={item.id} item={item} />
                                ))}
                            </div>
                        </ProdContainer>
                    </div>
                )}
            </Container>
        </>
    );
};

const Container = styled.div`
    width:100%;
    margin-top:150px;
    position:absolute;
    background-color:white;

    .searchBox {
        width:90%;
        margin:auto;
        left:5%;
        position:fixed;
        padding-top:20px;
        background-color:white;
        z-index:4;
    }

    .searchBox > input {
        width:100%;
        height:30px;
        margin:auto;
        outline:none;
        border:none;
        border-bottom:1px solid grey;
        font-size:17px;
        background-color:white;
    }

    .searchBox > input::placeholder {
        text-transform:uppercase;
        font-size:17px;
    }

    .productSection {
        margin-top:-40px;
        margin-bottom:100px;
    }
`;

const ProdContainer = styled.div`
    width: 90%;
    margin: auto;
    padding-top: 150px;
    margin-bottom:50px;

    .gridlayout {
        display: grid;
        width: 100%;
        gap: 15px;
        grid-template-columns: repeat(auto-fit,minmax(200px,max-content));
    }
`;

export default Search;
