import React, { useState, useEffect } from 'react';
//import Moment from 'react-moment';
import moment from 'moment';

//Common date function that returns date with specific format
export const DateFunction = (dateString, dateFormat) => {
    return moment(dateString).format(dateFormat)
}


export const hexToRGB = (h) => {
    let r = 0;
    let g = 0;
    let b = 0;
    if (h.length === 4) {
      r = `0x${h[1]}${h[1]}`;
      g = `0x${h[2]}${h[2]}`;
      b = `0x${h[3]}${h[3]}`;
    } else if (h.length === 7) {
      r = `0x${h[1]}${h[2]}`;
      g = `0x${h[3]}${h[4]}`;
      b = `0x${h[5]}${h[6]}`;
    }
    return `${+r},${+g},${+b}`;
  };
  
  export const formatValue = (value) => Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);
  
  export const formatThousands = (value) => Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);
  
  // To use in decimal type of inputs (e.g Price)
  export const convertToDecimal = (value) => {
    if (value.includes('.')) {
      if (value[(value.length - 1)] === '.') {
        value = (!value || value === '') ? null : value;
        value = isNaN(value) ? 0 : value;
        return value;
      }
      else{
        value = (!value || value === '') ? null : value;
        value = isNaN(value) ? 0 : parseFloat(value);
        return value;
      }
    }
    else {
      value = (!value || value === '') ? null : value;
      value = isNaN(value) ? 0 : Number(value);
      return value;
    }
  }
  
  /**
   * 
   * @param {value} value 
   * @returns 0 if input number is null or 0
   */
  export const isNullNumber = (value) => {
    if(value === null || value === 0 || !value || value < 0 || isNaN(value)){
      return 0;
    }
    else{
      return value;
    }
  }
  
  /**
   * 
   * @param {value} value 
   * @returns empty string if string is null or empty 
   */
  export const isNullString = (value) => {
    if(value === null || value === "" || !value){
      return "";
    }
    else{
      return value;
    }
  }