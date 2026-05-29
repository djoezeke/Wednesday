import { Configuration } from './theme';

const baseConfiguration = new Configuration({
    name: 'Wednesday',
    type: 'dark',
    semanticHighlighting: true,
    colors: {
        // Editor colors
        'editor.background': '#1e1e2e',
        'editor.foreground': '#cdd6f4',
        'editor.lineNumberActiveForeground': '#89b4fa',
        'editor.lineNumberForeground': '#6c7086',
        'editor.selectionBackground': '#313244',
        'editor.inactiveSelectionBackground': '#2a2a3e',
        'editor.wordHighlightBackground': '#3d3d5c',
        'editorCursor.foreground': '#89b4fa',
        'editorCursor.background': '#1e1e2e',
        'editorWhitespace.foreground': '#45475a',
        'editorIndentGuide.foreground': '#45475a',
        'editorIndentGuide.activeBackground': '#585b70',
    },
    tokenColors: [],
    semanticTokenColors: {},
});

module.exports = baseConfiguration;