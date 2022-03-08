import React, { useState } from 'react';
import { suggestions } from '../assets/data';
import { Button, Input } from './UI/Elements';

const Search = ({searchCharacter}) => {
    const [query, setQuery] = useState(""); 
    const handleChange = (event) => {
        setQuery(event.target.value);
    }
    const handleSearch = async(event) => {
        event.preventDefault();
        await searchCharacter(query);
        setQuery('');
    }
    return (
        <>
        <form onSubmit={handleSearch}>
            <Input name='query' placeholder='SEARCH DATABANK' value={query} onChange={handleChange}/>
            <Button disabled={query.length===0} type='submit'>Search</Button>
        </form>
        <br/>
        {suggestions.map((suggestion, index) => (
            <Button className='mg-3' key={index} 
              onClick={searchCharacter.bind(null, suggestion.id)}>
                {suggestion.username}
            </Button>))}
        </>
         
    )
}

export default Search