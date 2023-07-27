import { utils, write } from 'xlsx'; // Import required SheetJS utilities
import { saveAs } from 'file-saver'; // Import the saveAs function from FileSaver.js

export const exportToExcel = (data, fileName) => {
  const excelData = Object.entries(data).map(([sheetName, sheetData]) => ({
    sheetName,
    data: sheetData,
  }));

  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const workbook = utils.book_new();
  excelData.forEach(({ sheetName, data }) => {
    const worksheet = utils.aoa_to_sheet(data);
    utils.book_append_sheet(workbook, worksheet, sheetName);
  });

  const excelBuffer = write(workbook, { type: 'array', bookType: 'xlsx' });
  const sheetData = new Blob([excelBuffer], { type: fileType });
  saveAs(sheetData, `${fileName}${fileExtension}`);
};
