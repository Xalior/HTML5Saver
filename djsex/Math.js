/*
 * This is not a Math Library,
 *  (this is just a tribute)
 *
 * This is just a set of helpers, to make code easier to maintain.
 *
 * D. Rimron <darran@xalior.com>
 */

djsex.math = {
    randomint: function(floor, ceil) {
        return Math.floor((Math.random()*ceil)+floor);
    },

    decimalToHex: function(d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

        while (hex.length < padding) {
            hex = "0" + hex;
        }

        return hex;
    },
};
