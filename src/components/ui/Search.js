import React, { useState } from 'react'
// useState to ensure that every input has a piece of state in the form

const Search = ({ getQuery }) => {

const [text, setText] = useState('');

const onChange = (q) => {
    setText(q)
    getQuery(q)
}

    return (
        <section className='search'>
            <form>
                <input
                type='text'
                className='form-control'
                placeholder='Search for Member of Parliament'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search