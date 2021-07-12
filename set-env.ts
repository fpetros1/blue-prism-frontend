import { writeFile } from 'fs';

const targetPath = './src/environment/environment.ts';
const colors = require('colors');


const envConfigFile = `export const environment: any = {
   apiBaseUrl: '${process.env.BP_MOCK_SERVER_URL}'
};

`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));

writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Environment file generated ${targetPath} \n`));
   }
});
