import fsp from 'fs/promises';

// BEGIN
export function touch(path) {
  return fsp.access(path)
    .then(() => Promise.resolve())
    .catch(() => fsp.writeFile(path, ''));
}
// END