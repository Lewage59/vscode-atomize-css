// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-atomize-css" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-atomize-css.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Atomize CSS!');
    const document = vscode.window.activeTextEditor?.document;
    console.log(document?.getText());

    vscode.window.activeTextEditor?.edit(editBuilder => {
      // 从开始到结束，全量替换
      const end = new vscode.Position((document?.lineCount || 0) + 1, 0);
      const text = '新替换的内容';
      editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), text);
    });
    
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
