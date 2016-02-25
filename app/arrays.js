exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        // Determine the location of an item in an array
        var i = 0;
        for (len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum: function (arr) {
        // Add all the values of an array together
        var sum = 0;
        var i = 0;
        for (len = arr.length; i < len; i++) {
            sum = sum + arr[i];

        }
        return sum;
    },

    remove: function (arr, item) {
        // Remove all instances of a value from an array
        var newArr = []; // forgot to initialise newArr 'as' array with []
        var i = 0;

        for (len = arr.length; i < len; i++) {
            if (arr[i] !== item) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },

    removeWithoutCopy: function (arr, item) {
        // Remove all instances of a value from an array, returning the original array
        var i = 0;
        for (len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                //prevent skipping an item otherwise it just removes the first and last. It works by reducing the index by one after removal
            }
        }
        return arr;
    },

    append: function (arr, item) {
        // Add an item to the end of an array
        (function () {
            arr.push(item);
        })();
        return arr;
    },

    truncate: function (arr) {
        // Remove the last item of an array
        arr.pop();

        return arr;
    },

    prepend: function (arr, item) {
        // Add an item to the beginning of an array
        //console.log("orig = " + arr);

        arr.splice(0, 0, item);
        //console.log("new = " + arr);

        return arr;

    },

    curtail: function (arr) {
        // Remove the first item of an array
        arr.shift();
        return arr;
    },

    concat: function (arr1, arr2) {
        // join together two arrays (this preserve the original arrays
        var arr3 = [];
        arr3 = arr1.concat(arr2);

        return arr3;
    },

    insert: function (arr, item, index) {
        //Add an item anywhere in an array
        arr.splice(index,0,item);

        return arr;
    },

    count: function (arr, item) {
        // count the occurences of an item in an array
        var i = 0;
        count = 0;
        for (len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates: function (arr) {
        // find duplicates in an array
        console.log("orig dupe arr = " + arr);

        var seen = {};
        var dupes = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
        }

        for (var item in seen) {
            if (seen.hasOwnProperty(item) && seen[item] > 1) {
                dupes.push(item);
            }
        }
        console.log(dupes);

        return dupes;

    },

    square: function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    },

    findAllOccurrences: function (arr, target) {
        var i = 0;
        console.log("arr = " + arr);
        console.log("target = " + target);

        //var len = arr.length;
        for (len = arr.length; i < len; i++) {

            if (target == arr[i]) {
                return arr[i];

            }

        }
    }
};