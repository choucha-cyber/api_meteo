(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./scanner"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEOL = exports.format = void 0;
    const scanner_1 = require("./scanner");
    function format(documentText, range, options) {
        let initialIndentLevel;
        let formatText;
        let formatTextStart;
        let rangeStart;
        let rangeEnd;
        if (range) {
            rangeStart = range.offset;
            rangeEnd = rangeStart + range.length;
            formatTextStart = rangeStart;
            while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
                formatTextStart--;
            }
            let endOffset = rangeEnd;
            while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
                endOffset++;
            }
            formatText = documentText.substring(formatTextStart, endOffset);
            initialIndentLevel = computeIndentLevel(formatText, options);
        }
        else {
            formatText = documentText;
            initialIndentLevel = 0;
            formatTextStart = 0;
            rangeStart = 0;
            rangeEnd = documentText.length;
        }
        const eol = getEOL(options, documentText);
        let numberLineBreaks = 0;
        let indentLevel = 0;
        let indentValue;
        if (options.insertSpaces) {
            indentValue = repeat(' ', options.tabSize || 4);
        }
        else {
            indentValue = '\t';
        }
        let scanner = (0, scanner_1.createScanner)(formatText, false);
        let hasError = false;
        function newLinesAndIndent() {
            if (numberLineBreaks > 1) {
                return repeat(eol, numberLineBreaks) + repeat(indentValue, initialIndentLevel + indentLevel);
            }
            else {
                return eol + repeat(indentValue, initialIndentLevel + indentLevel);
            }
        }
        function scanNext() {
            let token = scanner.scan();
            numberLineBreaks = 0;
            while (token === 15 /* SyntaxKind.Trivia */ || token === 14 /* SyntaxKind.LineBreakTrivia */) {
                if (token === 14 /* SyntaxKind.LineBreakTrivia */ && options.keepLines) {
                    numberLineBreaks += 1;
                }
                else if (token === 14 /* SyntaxKind.LineBreakTrivia */) {
                    numberLineBreaks = 1;
                }
                token = scanner.scan();
            }
            hasError = token === 16 /* SyntaxKind.Unknown */ || scanner.getTokenError() !== 0 /* ScanError.None */;
            return token;
        }
        const editOperations = [];
        function addEdit(text, startOffset, endOffset) {
            if (!hasError && (!range || (startOffset < rangeEnd && endOffset > rangeStart)) && documentText.substring(startOffset, endOffset) !== text) {
                editOperations.push({ offset: startOffset, length: endOffset - startOffset, content: text });
            }
        }
        let firstToken = scanNext();
        if (options.keepLines && numberLineBreaks > 0) {
            addEdit(repeat(eol, numberLineBreaks), 0, 0);
        }
        if (firstToken !== 17 /* SyntaxKind.EOF */) {
            let firstTokenStart = scanner.getTokenOffset() + formatTextStart;
            let initialIndent = repeat(indentValue, initialIndentLevel);
            addEdit(initialIndent, formatTextStart, firstTokenStart);
        }
        while (firstToken !== 17 /* SyntaxKind.EOF */) {
            let firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
            let secondToken = scanNext();
            let replaceContent = '';
            let needsLineBreak = false;
            while (numberLineBreaks === 0 && (secondToken === 12 /* SyntaxKind.LineCommentTrivia */ || secondToken === 13 /* SyntaxKind.BlockCommentTrivia */)) {
                let commentTokenStart = scanner.getTokenOffset() + formatTextStart;
                addEdit(' ', firstTokenEnd, commentTokenStart);
                firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
                needsLineBreak = secondToken === 12 /* SyntaxKind.LineCommentTrivia */;
                replaceContent = needsLineBreak ? newLinesAndIndent() : '';
                secondToken = scanNext();
            }
            if (secondToken === 2 /* SyntaxKind.CloseBraceToken */) {
                if (firstToken !== 1 /* SyntaxKind.OpenBraceToken */) {
                    indentLevel--;
                }
                ;
                if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 1 /* SyntaxKind.OpenBraceToken */) {
                    replaceContent = newLinesAndIndent();
                }
                else if (options.keepLines) {
                    replaceContent = ' ';
                }
            }
            else if (secondToken === 4 /* SyntaxKind.CloseBracketToken */) {
                if (firstToken !== 3 /* SyntaxKind.OpenBracketToken */) {
                    indentLevel--;
                }
                ;
                if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 3 /* SyntaxKind.OpenBracketToken */) {
                    replaceContent = newLinesAndIndent();
                }
                else if (options.keepLines) {
                    replaceContent = ' ';
                }
            }
            else {
                switch (firstToken) {
                    case 3 /* SyntaxKind.OpenBracketToken */:
                    case 1 /* SyntaxKind.OpenBraceToken */:
                        indentLevel++;
                        if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
                            replaceContent = newLinesAndIndent();
                        }
                        else {
                            replaceContent = ' ';
                        }
                        break;
                    case 5 /* SyntaxKind.CommaToken */:
                        if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
                            replaceContent = newLinesAndIndent();
                        }
                        else {
                            replaceContent = ' ';
                        }
                        break;
                    case 12 /* SyntaxKind.LineCommentTrivia */:
                        replaceContent = newLinesAndIndent();
                        break;
                    case 13 /* SyntaxKind.BlockCommentTrivia */:
                        if (numberLineBreaks > 0) {
                            replaceContent = newLinesAndIndent();
                        }
                        else if (!needsLineBreak) {
                            replaceContent = ' ';
                        }
                        break;
                    case 6 /* SyntaxKind.ColonToken */:
                        if (options.keepLines && numberLineBreaks > 0) {
                            replaceContent = newLinesAndIndent();
                        }
                        else if (!needsLineBreak) {
                            replaceContent = ' ';
                        }
                        break;
                    case 10 /* SyntaxKind.StringLiteral */:
                        if (options.keepLines && numberLineBreaks > 0) {
                            replaceContent = newLinesAndIndent();
                        }
                        else if (secondToken === 6 /* SyntaxKind.ColonToken */ && !needsLineBreak) {
                            replaceContent = '';
                        }
                        break;
                    case 7 /* SyntaxKind.NullKeyword */:
                    case 8 /* SyntaxKind.TrueKeyword */:
                    case 9 /* SyntaxKind.FalseKeyword */:
                    case 11 /* SyntaxKind.NumericLiteral */:
                    case 2 /* SyntaxKind.CloseBraceToken */:
                    case 4 /* SyntaxKind.CloseBracketToken */:
                        if (options.keepLines && numberLineBreaks > 0) {
                            replaceContent = newLinesAndIndent();
                        }
                        else {
                            if ((secondToken === 12 /* SyntaxKind.LineCommentTrivia */ || secondToken === 13 /* SyntaxKind.BlockCommentTrivia */) && !needsLineBreak) {
                                replaceContent = ' ';
                            }
                            else if (secondToken !== 5 /* SyntaxKind.CommaToken */ && secondToken !== 17 /* SyntaxKind.EOF */) {
                                hasError = true;
                            }
                        }
                        break;
                    case 16 /* SyntaxKind.Unknown */:
                        hasError = true;
                        break;
                }
                if (numberLineBreaks > 0 && (secondToken === 12 /* SyntaxKind.LineCommentTrivia */ || secondToken === 13 /* SyntaxKind.BlockCommentTrivia */)) {
                    replaceContent = newLinesAndIndent();
                }
            }
            if (secondToken === 17 /* SyntaxKind.EOF */) {
                if (options.keepLines && numberLineBreaks > 0) {
                    replaceContent = newLinesAndIndent();
                }
                else {
                    replaceContent = options.insertFinalNewline ? eol : '';
                }
            }
            const secondTokenStart = scanner.getTokenOffset() + formatTextStart;
            addEdit(replaceContent, firstTokenEnd, secondTokenStart);
            firstToken = secondToken;
        }
        return editOperations;
    }
    exports.format = format;
    function repeat(s, count) {
        let result = '';
        for (let i = 0; i < count; i++) {
            result += s;
        }
        return result;
    }
    function computeIndentLevel(content, options) {
        let i = 0;
        let nChars = 0;
        const tabSize = options.tabSize || 4;
        while (i < content.length) {
            let ch = content.charAt(i);
            if (ch === ' ') {
                nChars++;
            }
            else if (ch === '\t') {
                nChars += tabSize;
            }
            else {
                break;
            }
            i++;
        }
        return Math.floor(nChars / tabSize);
    }
    function getEOL(options, text) {
        for (let i = 0; i < text.length; i++) {
            const ch = text.charAt(i);
            if (ch === '\r') {
                if (i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    return '\r\n';
                }
                return '\r';
            }
            else if (ch === '\n') {
                return '\n';
            }
        }
        return (options && options.eol) || '\n';
    }
    function isEOL(text, offset) {
        return '\r\n'.indexOf(text.charAt(offset)) !== -1;
    }
    exports.isEOL = isEOL;
});
