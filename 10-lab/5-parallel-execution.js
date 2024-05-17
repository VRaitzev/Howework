import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirPath, callback) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        callback(err, null);
        return;
      }
  
      async.map(files, (file, callback) => {
        const filePath = path.join(dirPath, file);
        fs.stat(filePath, (err, stats) => {
          if (err) {
            callback(err, null);
            return;
          }
          if (stats.isFile()) {
            callback(null, stats.size);
          } else {
            callback(null, 0);
          }
        });
      }, (err, sizes) => {
        if (err) {
          callback(err, null);
          return;
        }
        const totalSize = _.sumBy(sizes);
        callback(null, totalSize);
      });
    });
  };
// END
