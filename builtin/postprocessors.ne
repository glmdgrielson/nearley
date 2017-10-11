# Simple postprocessors

# Postprocessor generator that lets you select the nth element of the list.
# `id` is equivalent to nth(0).
@{%
function nth(n) {
    return function(d) {
        return d[n];
    };
}
%}

# Postprocessor generator that lets you generate an object dynamically.
@{%
function $(o) {
    return function(d) {
        var ret = {};
        Object.keys(o).forEach(function(k) {
            ret[k] = d[o[k]];
        });
        return ret;
    };
}
%}

# A separated list of elements.

delimited[el, delim] -> $el ($delim $el {% nth(1) %}):* {%
    function(d) {
        return [d[0]].concat(d[1]);
    }
%}

# The nuller builtin

@{%
function nuller() {
	return null;
}
%}
