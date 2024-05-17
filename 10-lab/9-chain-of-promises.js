import fsp from 'fs/promises';

// BEGIN
export const getTypes = (paths) =>{
    return new Promise((resolve, reject) => {
      const results = [];
      let count = 0;
  
      const processPath = (index) => {
        if (index >= paths.length) {
          resolve(results);
          return;
        }
  
        const path = paths[index];
        fsp.stat(path)
          .then(stats => {
            results[index] = stats.isDirectory() ? 'directory' : 'file';
            processPath(index + 1);
          })
          .catch(error => {
            results[index] = null;
            processPath(index + 1);
          });
      };
  
      processPath(0);
    });
  }
// END