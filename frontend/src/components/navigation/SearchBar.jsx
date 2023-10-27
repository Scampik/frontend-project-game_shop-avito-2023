import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Link } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';

import { selectors } from '../../slices/gamesSlice.js';
import routes from '../../routes.js';

const SearchBar = () => {
  const data = useSelector(selectors.selectAll);
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);
  const [selectGame, setSelectGame] = useState([]);
  const nameGame = data.map((el) => el.title);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleBlur = () => {
    setShowInput(!showInput);
  };

  const handleInputLng = (inputValue) => {
    if (inputValue && inputValue.trim() !== '') {
      const filteredOptions = nameGame.filter((el) => el
        .toLowerCase().startsWith(inputValue.toLowerCase()));
      setSelectGame(filteredOptions.slice(0, 1));
    } else {
      setSelectGame([]);
    }
  };

  return (
    <div className="d-flex py-2 px-0 px-lg-2 align-items-center nav-link">
      {showInput && (
        <Typeahead
          id="template"
          labelKey="template"
          className="mx-2"
          style={{
            height: '28px',
          }}
          maxResults={5}
          onChange={([e]) => handleInputLng(e)}
          options={nameGame}
          renderInput={({ referenceElementRef, ...inputProps }) => (
            <Form.Control
              ref={(node) => {
                inputRef.current = node;
                referenceElementRef(node);
              }}
              onBlur={() => handleBlur()}
              onChange={inputProps.onChange}
              onFocus={inputProps.onFocus}
              placeholder={inputProps.placeholder}
              type={inputProps.type}
              value={inputProps.value}
            />
          )}
          renderMenuItemChildren={(option) => (
            <Link
              to={routes.gamePage(option)}
              state={data.find((el) => el.title === option)}
              className="text-decoration-none text-body"
            >
              <Image
                alt={option}
                // roundedCircle
                src={data.find((el) => el.title === option).thumbnail}
                style={{
                  width: '15%',
                  height: 'auto',
                }}
              />
              {` ${option}`}
            </Link>
          )}
          selected={selectGame}
        />
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
