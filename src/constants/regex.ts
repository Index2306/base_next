export const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const regexPhoneNum = /^(?:\+49|0)[1-9]\d{8,9}$/;

export const regexNotSpecialCharacter = /^[a-zA-Z0-9]*$/;

export const regexCheckTypeNum = /^[0-9]+$/;

export const regexCheckPostCode = /^[0-9-]*$/;

export const regexNotAllowWhiteSpaceAtFirstCharacter = /^(?!\s)[\w\s-]*$/;

export const regexPassword8to16 = /^(?!.*[^\x00-\x7F])[^\s]{8,16}$/;

export const regexIsSpecial = /^[^\W_]+$/;
