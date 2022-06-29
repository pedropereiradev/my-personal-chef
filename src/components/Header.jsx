import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchTopBTN from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header() {
  const [title, setTitle] = useState('');
  const [hasSearchBtn, setHasSearchBtn] = useState(false);
  const [hasSearchBar, setHasSearchBar] = useState(false);
  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    const titleNames = pathname.split(/-|\//gi);
    const handleTitles = [];
    titleNames.forEach((titleWord) => {
      if (titleWord !== '') {
        handleTitles.push(titleWord.charAt(0).toUpperCase() + titleWord.slice(1));
      }
    });
    if (handleTitles.length > 1) {
      setTitle(`${handleTitles[0]} ${handleTitles[handleTitles.length - 1]}`);
    } else {
      setTitle(`${handleTitles[0]}`);
    }

    if (pathname === '/foods'
      || pathname === '/drinks'
      || pathname.includes('nationalities')) setHasSearchBtn(true);
  }, [pathname]);

  return (
    <header>
      <button
        type="button"
        onClick={ () => history.push('/profile') }
      >
        <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
      </button>
      <h2 data-testid="page-title">{title}</h2>
      { hasSearchBtn
      && (
        <button
          type="button"
          onClick={ () => setHasSearchBar(!hasSearchBar) }
        >
          <img src={ searchTopBTN } alt="Search Icon" data-testid="search-top-btn" />
        </button>) }
      { hasSearchBar && <SearchBar />}
    </header>
  );
}