import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../../utils/Transition';

export default function DropdownSelect(props) {


  var options = [
    {
      id: 0,
      name: 'Select'
    }
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(props.value);

  if (props.optionArray !== undefined) {
    if (props.optionArray.length > 0) {
      options = options.concat(props.optionArray);

    }
  }

  const trigger = useRef(null);
  const dropdown = useRef(null);


  useEffect(() => {

    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const setFilterParameters = (id, drpIdentity, name) => {
    props.setFilterParameters(id, drpIdentity, name);
  }
  return (

    <div className="relative inline-flex w-full" key={props.drpIdentity}>

      {props.disabled === true ?
        <button
          disabled={true}
          ref={trigger}
          className="custom-input btn btn-dropdown justify-between font-normal py-3 w-full bg-[#e9e9ea] border-[#757575] text-[#757575] px-4 "
          aria-label="Select date range"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          <span className="flex items-center">
            <span className='common-fonts-size font-normal'>{options.find(option => option.id === Number(props.value)) ? options.find(option => option.id === Number(props.value)).name : 'Select'}</span>
          </span>
          <svg className="shrink-0 ml-1 fill-current text-[#757575]" width="11" height="7" viewBox="0 0 11 7">
            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
          </svg>
        </button>
        :
        <>
          <input
            ref={trigger}
            id="eventName"
            name={props.drpIdentity}
            className="custom-input btn btn-dropdown justify-between font-normal py-3 w-full border-[#757575] text-[#C00000] px-4"
            type="text"
            onFocus={() => { setDropdownOpen(!dropdownOpen); setSelected(options.find(option => option.id === Number(props.value)).id) }}
            onChange={(e) => props.handleChange(e, props.drpIdentity)}
            value={props.searchText}
            autoComplete="off"
          />
          <svg className="absolute right-[20px] top-[50%] translate-y-[-50%] ml-1 fill-current text-[#757575]" width="11" height="7" viewBox="0 0 11 7">
            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z"></path>
          </svg>
        </>

      }

      <Transition
        show={dropdownOpen}
        tag="div"
        className="options z-10 absolute top-full left-0 w-full font-normal bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-100 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          className="text-sm text-[#757575] font-normal dropdown-option"
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {
            options.map(option => {
              return (
                <button
                  key={option.id}
                  tabIndex="0"
                  className={`flex items-center font-normal w-full text-[#757575] hover:bg-slate-50 py-1 px-3 cursor-pointer ${option.id === props.value && 'hover-active-color'}`}
                  onClick={(event) => { setSelected(option.id); setDropdownOpen(false); setFilterParameters(option.id, props.drpIdentity, option.name) }}
                >
                  <svg className={`shrink-0 mr-2 fill-current theme-text-color ${option.id !== props.value && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                    <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                  </svg>
                  <span className='font-normal'>{option.name}</span>
                </button>
              )
            })
          }
        </div>
      </Transition>
    </div>
  );
}

