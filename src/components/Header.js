import React from 'react'

export default function Header(props) {
  return (
    <header>
        <h1 id='header'>
            {props.blogdata.name}
        </h1>

    </header>
  );
}
