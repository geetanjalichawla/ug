// utils/excelExport.js
import XLSX from "xlsx";

export const exportToExcel = (data, fileName) => {
  const workbook = XLSX.utils.book_new();

  for (const sheetName in data) {
    const sheetData = data[sheetName];
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
  const excelBlob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(excelBlob);
  downloadLink.download = `${fileName}.xlsx`;
  downloadLink.click();
};
