import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';

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
  const nameGame: string[] = data.map((el) => el.title);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleBlur = () => {
    setShowInput(!showInput);
  };

  const handleInputLng = (inputValue: string): void => {
    if (inputValue && inputValue.trim() !== '') {
      const filteredOptions: string[] = nameGame.filter((el: string) => el
        .toLowerCase().startsWith(inputValue.toLowerCase()));
      setSelectGame(filteredOptions.slice(0, 1));
    } else {
      setSelectGame([]);
    }
    setSelectGame([]);
    setShowInput(!showInput);
  };

  return (
    <div className="d-flex align-items-center nav-link p-0">
      {showInput && (
        <Typeahead
          id="template"
          labelKey="template"
          className="mx-2 text-secondary align-items-start"
          style={{
            height: '35px',
            width: '250px',
          }}
          maxResults={5}
          paginationText="..."
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
            <div>
              <Link
                to={routes.gamePage(option)}
                state={data.find((el) => el.title === option)}
                className="text-decoration-none text-body row"
              >
                <div className="col-5">
                  <Image
                    alt={option}
                    src={data.find((el) => el.title === option).thumbnail}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <div className="col-3">
                  <div>{` ${option}`}</div>
                  <div className="text-muted small">{data.find((el) => el.title === option).genre}</div>
                </div>
              </Link>
            </div>
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
