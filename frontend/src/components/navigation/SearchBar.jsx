import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Form, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

import { selectors } from '../../slices/gamesSlice.js';

const SearchBar = () => {
  const data = useSelector(selectors.selectAll);
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, [showInput]);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in develop');
    console.log(data);
  };

  return (
    <div className="d-flex py-2 px-0 px-lg-2 align-items-center nav-link">
      {showInput && (
        <Form className="mx-2" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            ref={inputRef}
            placeholder="Поиск игры"
            className=""
            onBlur={() => setShowInput(!showInput)}
            value={searchQuery}
            onChange={handleChange}
            autoFocus
            style={{
              height: '28px',
            }}
          />
        </Form>
      )}
      <Search
        size={13}
        variant="light"
        onClick={handleClick}
        className=""
      />
    </div>
  );
};

export default SearchBar;
