import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 1) {

            setCategories(cate => [inputValue, ...cate]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>AddCategory</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            >

            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
