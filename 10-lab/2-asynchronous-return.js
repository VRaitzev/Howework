import fs from 'fs';

// BEGIN
const write = (path, data, callback) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        console.error(`Ошибка записи в файл: ${err}`);
      } else {
        callback();
      }
    });
  };
export default write
// END