// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// class GoDocumentRangeFormatter implements vscode.DocumentRangeFormattingEditProvider{
//     public provideDocumentRangeFormattingEdits(
//         document: vscode.TextDocument, range: vscode.Range,
//         options: vscode.FormattingOptions, token: vscode.CancellationToken):
// 		Thenable<vscode.TextEdit[]>;
	
// 	}
	
// }

export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "multi-line-merge" is now active!'
       );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "multi-line-merge.multiLineMerge",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      // vscode.window.showInformationMessage('Hello World from multi-line-merge!');
	  // 获取鼠标选择区域文本
		const selection:any = vscode.window.activeTextEditor?.selection;
		const selectionText = vscode.window.activeTextEditor?.document.getText(selection);
		// 合并后的文本
    // 去掉每一行前后的空白字符
    let transformText = selectionText?.replace(/^ +/gm,'').replace(/ +$/gm,'').replace(/\n/gm,' ');
    // 合并
    console.log(transformText);
    
		// 替换
		// 
    }
  );
  // onDidChangeTextDocument 修改文件时触发
  // vscode.workspace.onDidChangeTextDocument(function(any:any){
  // console.dir(any);
  // 
  // });
  context.subscriptions.push(disposable);
//   vscode.languages.registerDocumentRangeFormattingEditProvider({ scheme: 'file', language: 'typescript' },new GoDocumentRangeFormatter())

  // context.subscriptions.push(vscode.languages.registerDocumentRangeFormattingEditProvider(GO_MODE, new GoDocumentRangeFormatter()));
}

// this method is called when your extension is deactivated
export function deactivate() {}
