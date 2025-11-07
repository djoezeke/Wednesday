// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { commands, workspace, ConfigurationTarget } from 'vscode';

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export function activate(context: vscode.ExtensionContext) {

  // Observe changes in the config
  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('Wednesday')) {
    }
  })

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  const settingArr = ['Italic', 'Bold']
  settingArr.forEach((settingItem) => {
    commands.registerCommand(`Wednesday.set${settingItem}`, () => {
      workspace
        .getConfiguration()
        .update(
          `Wednesday.${settingItem.toLowerCase()}`,
          true,
          ConfigurationTarget.Global
        )
    })
    commands.registerCommand(`Wednesday.cancel${settingItem}`, () => {
      workspace
        .getConfiguration()
        .update(
          `Wednesday.${settingItem.toLowerCase()}`,
          false,
          ConfigurationTarget.Global
        )
    })
  })
}
