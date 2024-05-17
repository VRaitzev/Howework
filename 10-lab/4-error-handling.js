import fs from 'fs';

// BEGIN
export const move = (sourcePath, targetPath, callback) => {
    fs.readFile(sourcePath, (err, data) => {
      if (err) {
        callback(err);
        return;
      }
      fs.writeFile(targetPath, data, (err) => {
        if (err) {
          callback(err);
          return;
        }
        fs.unlink(sourcePath, (err) => {
          if (err) {
            callback(err);
            return;
          }
          callback(null);
        });
      });
    });}

// END
