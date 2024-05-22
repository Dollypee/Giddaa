
/**Function to format Amount
 * 
 * @param {number} amount 
 * @returns string
 */
function formatAmount(amount) {
  // Round to 1 decimal place
  const roundedAmount = Math.round(amount * 10) / 10;

  // Convert to string and add commas
  const formattedAmount = roundedAmount.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedAmount;
}

/**
 * Function to convert decimal to percentage
 * @param {*} decimal 
 * @returns 
 */
function decimalToPercentage(decimal) {
  // Multiply by 100 and round
  const percentage = Math.round(decimal * 100);
  return percentage;
}

/**
 * Check if a given value is an array
 * @param {*} value
 * @return {boolean}
 */
const isArray = (value) => {
  if (Array.isArray(value) || value instanceof Array) {
    return true;
  }
  return false;
};

/**
 * Paginate an array of objects and return objects for specified page
 * along with additional properties
 *
 * @param {array} arrayOfObjects
 * @param {integer} pageSize, number of objects per page
 * @param {integer} pageNumber or current page
 * @return {object}
 */
const pagination = (arrayOfObjects, pageSize, pageNumber) => {
  // Guard against wrong value type
  arrayOfObjects = arrayOfObjects ?? [];

  pageNumber = pageNumber < 1 ? 1 : pageNumber;
  let data = arrayOfObjects.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );
  let totalItems = arrayOfObjects.length;
  let totalPages = Math.ceil(totalItems / pageSize);
  let nextPage =
    Math.round(totalPages) >= pageNumber + 1 ? pageNumber + 1 : null;
  let previousPage =
    Math.round(totalPages) > pageNumber - 1 ? pageNumber - 1 : null;

  return {
    pageNumber: pageNumber,
    pageSize: pageSize,
    totalItems: totalItems,
    totalPages: Math.round(totalPages),
    data: data,
    nextPage: nextPage,
    previousPage: previousPage,
    thereIsNextPage: nextPage !== null,
    thereIsPreviousPage: previousPage !== null && previousPage !== 0,
  };
};

/**
 * Checks if a value is defined
 * @param {*} value
 * @return {boolean}
 */
const isDefined = (value) => {
  if (value === undefined) {
    return false;
  }
  return true;
};


/**
 * Checks if a given string is empty
 * @param {String} string
 * @return {Boolean}
 */
const isEmptyString = (string) => {
  if (isString(string) && string !== undefined && string.length === 0) {
    return true;
  }
  return false;
};

/**
 * Check if a given value is a string
 * @param {*} value
 * @return {boolean}
 */
const isString = (value) => {
  if (typeof value === "string" || value instanceof String) {
    return true;
  }
  return false;
};
/**
 * Checks if a given object is empty
 * @param {Object} object
 * @return {Boolean}
 */
const isEmptyObject = (object) => {
  if (isObject(object) && object !== undefined) {
    for (var key in object) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(key)) {
        return false;
      }
    }
  }
  return true;
};

/**
 * Check if a given value is an object
 * @param {*} value
 * @return {boolean}
 */
const isObject = (value) => {
  if (!Array.isArray(value) && value instanceof Object) {
    return true;
  }
  return false;
};

/**
 * Checks if a given array is empty
 * @param {Array} array
 * @return {Boolean}
 */
const isEmptyArray = (array) => {
  if (isArray(array) && array !== undefined && array.length === 0) {
    return true;
  }
  return false;
};


/**
 * Check if a value is an empty string, an empty array, an empty object or is undefined
 * @param {*} value
 * @return {boolean}
 */
const isEmpty = (value) => {
  if (!isDefined(value)) {
    return true;
  }
  if (isString(value) && isEmptyString(value)) {
    return true;
  }
  if (isArray(value) && isEmptyArray(value)) {
    return true;
  }
  if (isObject(value) && isEmptyObject(value)) {
    return true;
  }

  return false;
};

/**
 * Format date to match 1st July 2020
 * @param {string} inputDate 
 * @returns string
 */
function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  // Get the day suffix (e.g., 'st', 'nd', 'rd', 'th')
  const day = date.getDate();
  let suffix;
  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  // Append the suffix to the day
  const formattedDay = `${day}${suffix}`;

  // Combine day, month, and year in the desired format
  return `${formattedDay} ${formattedDate.slice(formattedDate.indexOf(' ') + 1)}`;
}

/**
 * Calculate Days Overdue
 * @param {string} dueDateString 
 * @returns 
 */
function calculateDaysOverdue(dueDateString) {
  const dueDate = new Date(dueDateString);
  const currentDate = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  
  // Convert both dates to milliseconds since Unix epoch
  const dueDateMilliseconds = dueDate.getTime();
  const currentDateMilliseconds = currentDate.getTime();

  // Calculate the difference in milliseconds
  const differenceMilliseconds = currentDateMilliseconds - dueDateMilliseconds;

  // Convert the difference to days
  const daysOverdue = Math.floor(differenceMilliseconds / millisecondsPerDay);

  return daysOverdue;
}

export {
  formatAmount,
  decimalToPercentage,
  isArray,
  pagination,
  isEmpty,
  isString,
  isEmptyArray,
  isObject,
  isEmptyObject,
  formatDate,
  calculateDaysOverdue
}