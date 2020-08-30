import {exec} from 'child_process';

const executeCommandList = async(list: Array<string>) => {

    list.forEach(command => {
			executeCommandLine(command);
	});

};

const executeCommandLine = async (command: string) => {

    console.log(`Running command ${command}`);

    exec(String(command), (error: any, stdout: any, stderr: any) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });


};


export default executeCommandList;