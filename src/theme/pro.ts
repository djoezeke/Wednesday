import { Configuration } from './theme';

const proConfiguration = new Configuration({
    name: 'Wednesday Pro',
    type: 'dark',
    semanticHighlighting: true,
    colors: {
        // Editor colors with enhanced pro settings
        'editor.background': '#1a1a2e',
        'editor.foreground': '#e0e0ff',
        'editor.lineNumberActiveForeground': '#a8d8ff',
        'editor.lineNumberForeground': '#505070',
        'editor.selectionBackground': '#2d2d4d',
        'editor.inactiveSelectionBackground': '#252541',
        'editor.wordHighlightBackground': '#3a3a5c',
        'editorCursor.foreground': '#a8d8ff',
        'editorCursor.background': '#1a1a2e',
        'editorWhitespace.foreground': '#3a3a5a',
        'editorIndentGuide.foreground': '#3a3a5a',
        'editorIndentGuide.activeBackground': '#505080',
    },
    tokenColors: [],
    semanticTokenColors: {},
});

module.exports = proConfiguration;