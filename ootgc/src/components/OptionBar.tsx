import React, { useState } from 'react'; // we need this to make JSX compile
import './styles/OptionBar.css'
type OptionBarProps = {
  text: string,
}

export const OptionBar = ({ text }: OptionBarProps) => {
    const [selected, setSelected] = useState<Boolean>();
    function handleClick() {
        setSelected(!selected)
      }
    return (
        <div className={selected?'selectedDiv':'optionDiv'} onClick={handleClick} >
            <h1 className='text'>{text}</h1>
        </div>
    )
}

