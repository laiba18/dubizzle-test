/**
 * returns date.
 * @param {String} dateValue
 * @return {string}
 */
export const getDate = (dateValue) => new Date(dateValue).toLocaleDateString("en-US")