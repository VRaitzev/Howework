import fsp from 'fs/promises';

// BEGIN
export async function exchange(file1Path, file2Path) {
  try {
    const file1Content = await fsp.readFile(file1Path, 'utf-8');
    const file2Content = await fsp.readFile(file2Path, 'utf-8');

    await fsp.writeFile(file1Path, file2Content);
    await fsp.writeFile(file2Path, file1Content);
  } catch (error) {
    console.error('Ошибка при обмене содержимым файлов:', error);
  }
}
// END