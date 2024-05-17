import fs from 'fs';

// BEGIN
export const compareFileSizes = (path1, path2, callback) => {
    fs.stat(path1, (err1, stats1) => {
      if (err1) {
        callback(err1, null);
        return;
      }
      fs.stat(path2, (err2, stats2) => {
        if (err2) {
          callback(err2, null);
          return;
        }
        const result = Math.sign(stats1.size - stats2.size);
        callback(null, result);
      });
    });
  };


// END