const _ = {
  clamp (number, lower, upper) {
    if (number < lower) {
      return lower;
    } else if (number < upper) {
      return number;
    } else {
      return upper;
    };
  },

  inRange (number, startValue, endValue) {
    let lowerLimit = '';
    let upperLimit = '';
    if (endValue === undefined) {
      lowerLimit = 0;
      upperLimit = startValue;
    } else if (startValue > endValue) {
      lowerLimit = endValue;
      upperLimit = startValue;
    } else {
      lowerLimit = startValue;
      upperLimit = endValue;
    };
    if (number < lowerLimit) {
      return false;
    } else if (number >= upperLimit) {
      return false;
    } else {
      return true;
    };
  },

  words (string) {
    return string.split(' ');
  },

  pad (string, length) {
    if (string.length > length) {
      return string;
    }
    let diff = length - string.length;
    let frontGapValue = Math.floor(diff / 2);
    let endGapValue = Math.ceil(diff / 2);
    let frontGap = ' '.repeat(frontGapValue);
    let endGap = ' '.repeat(endGapValue);
    return frontGap + string + endGap;
  },

  has (obj, key) {
    let objArray = Object.entries(obj);
    for (let [checkKey, value] of objArray) {
      if (checkKey === key) {
        return true;
      }else {
        return false
      };
    };
  },

  invert (obj) {
    let objectArray = Object.entries(obj);
    let switchArray = objectArray.map(function(element) {
      element.unshift(element[1]);
      element.pop();
      return element;
    });
    let switchObject = switchArray.reduce(function(prev, curr) { //found this solution on stack overflow.  I do not understand why it works.
      prev[curr[0]] = curr[1];
      return prev;
    }, {});
  return switchObject;
  },
/*
I do not understand lines 68-71.  I know reduce performs a function on each
element of the switchArray but the only examples I have seen, reduce an array of
values down to a single sum.  How is reduce converting my array into an object?
My original plan for this function was to use Object.entries to change my object
to an array, manipulate the array, then convert back with Object.fromEntries.
However, I realized after reading MDN, Object.fromEntries was not supported in
node or chrome.  An explaination of reduce would be appreciated.
*/

  findKey (obj, preFunc) {
    let objArray = Object.entries(obj);
    for (let [key, value] of objArray) {
      let trueVal = preFunc(value);
      if (trueVal) {
        return key;
      };
    };
  },

  drop (arr, numb) {
    if (numb === undefined) {
      numb = 1;
    }
    for (let i = 1; i <= numb; i++) {
      arr.shift();
    }
    return arr;
  },

  dropWhile (arr, preFunc) {
    for (let i = 0; i < arr.length; i++) {
      if (!preFunc(arr[i], i, arr)) {
        let shortArray = arr.slice(i);
        return shortArray;
      };
    };
  },

  chunk (arr, numb) {
    if (numb === undefined){
      numb = 1;
    }
    let newArray = [];
    for (let i = 0; i < arr.length; i += numb) {
      let startVal = i;
      let endVal = i + numb;
      if (endVal > arr.length) {
        endVal = undefined;
      }
      newArray.push(arr.slice(startVal, endVal));
    };
    return newArray;
  }
};

// Do not write or modify code below this line.
module.exports = _;
