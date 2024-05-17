import fs from 'fs';

// BEGIN
const watch = (filepath, interval, callback) => {
    let lastModified = Date.now();
  
    const timerId = setInterval(() => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          callback(err);
          return;
        }
        if (stats.mtimeMs > lastModified) {
          lastModified = stats.mtimeMs;
          callback(null);
        }
      });
    }, interval);
  
    return timerId;
  };

  export default watch
// END
