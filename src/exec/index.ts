import executeCommandList from './exeCommandList';
import * as scriptList from '../data/script-list.json';
const defaultEvent = 'onWindowCreated';


interface ScriptList {
    [key: string]: Array<Script>;
}

interface Script {
    script: string;
    type: string;
}

export async function executeScripts(inputEvent?: string) {

    const event: string = inputEvent? inputEvent: defaultEvent;
    const scriptArray: Array<string> = getScripts(scriptList, event, 'cmd');

    executeCommandList(scriptArray);

}


const getScripts =  (scriptList: ScriptList, event : string, type: string)  => {
    
    let scriptArray : Array<string> = []; 

    if(scriptList.hasOwnProperty(event)){

            scriptList[event].forEach(script => {
                if(script.type === type){
                    scriptArray.push(script.script);
                }
            });
    }
    
    return scriptArray;
    
};
