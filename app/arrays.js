exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      var i = 0;
      for (len = arr.length; i < len; i++) {
          if (arr[i] === item) {
              return i;
          }
      }
      return -1;
  },

  sum : function(arr) {

          var sum = 0;
      var i = 0;
      for (len = arr.length; i < len; i++) {
          sum = sum + arr[i];

      }
      console.log(sum);
      return sum;
  },

  remove : function(arr, item) {

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
