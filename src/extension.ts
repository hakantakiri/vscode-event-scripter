// Global dependencies
import * as vscode from 'vscode';

import { buildCommands } from './commands';
import { executeScripts } from './exec';


export async function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Event Scripter: Loading commands ...');

	buildCommands(context);

	executeScripts();
	
}

// this method is called when your extension is deactivated
export function deactivate() {}
