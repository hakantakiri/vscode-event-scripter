import * as vscode from "vscode";
import * as path from 'path';

const openScriptFile = async () => {

    let command = vscode
        .commands
        .registerCommand('event-scripter.openScriptFile', () => {
            
            // Open document and then notify 
            vscode.workspace
                .openTextDocument(path.join(__dirname, '../data/script-list.json'))
                    .then(document => vscode.window.showTextDocument(document))
                    .then(()=> vscode.window.showInformationMessage('Event scripter: Opened script file'));

        });


    return command;
};

export default openScriptFile;