// Generated automatically by nearley, version 2.11.0
// http://github.com/Hardmath123/nearley
(function () {
    function id(x) { return x[0]; }
    import { compile } from 'moo';
    var lexer = moo_1.compile({
        larrow: '<',
        rarrow: '>',
        integer: /[0-9]+/
    });
    var grammar = {
        Lexer: lexer,
        ParserRules: [
            { "name": "expression", "symbols": [(lexer.has("larrow") ? { type: "larrow" } : larrow), (lexer.has("integer") ? { type: "integer" } : integer), (lexer.has("rarrow") ? { type: "rarrow" } : rarrow)], "postprocess": function (parts) { return parts.map(function (p) { return p.value; }); } }
        ],
        ParserStart: "expression"
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = grammar;
    }
    else {
        window.grammar = grammar;
    }
})();
