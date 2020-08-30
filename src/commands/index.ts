import * as vscode from 'vscode';

import openScriptFile from "./openScriptFile";

export async function buildCommands(context: vscode.ExtensionContext) {

    /**
     * Loading all commands before subscription
     */
    let openScriptFileCommand = await openScriptFile();


    /**
     *  All commands subscriptions to context happens here
     */   
    context.subscriptions.push(openScriptFileCommand);


}