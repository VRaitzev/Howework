import fs from 'fs';

// BEGIN


const print = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Ошибка чтения файла: ${err}`);
      } else {
        console.log(data);
      }
    });
  };
  
export default print;

// END
