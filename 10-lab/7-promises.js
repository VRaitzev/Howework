import fsp from 'fs/promises';

// BEGIN
export const reverse = (filePath) => {
    return fsp.readFile(filePath, 'utf8')
      .then(data => {
        const lines = data.split('\n').reverse().join('\n');
        return fsp.writeFile(filePath, lines, 'utf8');
      })
      .catch(err => {
        console.error(`Ошибка при обращении к файлу: ${err}`);
      });
  };
  
// END