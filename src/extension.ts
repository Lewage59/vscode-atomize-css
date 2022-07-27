import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "vscode-atomize-css" is now active!');

	const disposable = vscode.commands.registerCommand('extension.atomize', () => {
		vscode.window.showInformationMessage('Wellcome to use Atomize CSS!');
    const document = vscode.window.activeTextEditor?.document;
    console.log(document?.getText());

    vscode.window.activeTextEditor?.edit(editBuilder => {
      // from begin to end position, replace all 
      const end = new vscode.Position((document?.lineCount || 0) + 1, 0);
      const text = '新替换的内容';
      editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), text);
    });
    
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
