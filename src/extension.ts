import * as vscode from 'vscode';
import * as atomic from 'transform-atomic-css';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "vscode-atomize-css" is now active!');

	const disposable = vscode.commands.registerCommand('extension.atomize', async () => {
		vscode.window.showInformationMessage('Wellcome to use Atomize CSS!');
    const document = vscode.window.activeTextEditor?.document;
    const text: string = document?.getText() || '';
    console.log(text);

    const transformText: string = await atomic.transformer(text);

    vscode.window.activeTextEditor?.edit(editBuilder => {
      // from begin to end position, replace all 
      const end = new vscode.Position((document?.lineCount || 0) + 1, 0);
      editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), transformText);
    });
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
