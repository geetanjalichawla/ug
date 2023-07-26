// ExcelDownloadButton.js
import React from "react";
import { useSelector } from "react-redux";
import { exportToExcel } from "../../../utils/excelExport";
import { Button } from "@chakra-ui/react";

const ExcelDownloadButton = () => {
  const data = useSelector((state) => state.auth);

  const handleDownload = () => {
    const dataToExport = {
      "Comments": [
        ["Type", "Count"],
        ["Negative", data.comments.negative || ""],
        ["Neutral", data.comments.neutral || ""],
        ["Positive", data.comments.positive || ""],
        ["Remark", data.comments.remark || ""],
      ],
      "Costumer By Devices": [
        ["Type", "Count"],
        ["Offline Selling", data.costumer_by_devices.offline_selling || ""] || "",
        ["Web Sales", data.costumer_by_devices.web_sales || ""],
      ],
      "Performance": [
        ["Description", "Score", "Title"],
        [data.performance.description, data.performance.score, data.performance.title || ""],
      ],
      "Revenue Cards": [
        ["Type", "Amount"],
        ["Purchase", data.revenue_cards.purchase || ""],
        ["Refunds", data.revenue_cards.refunds || ""],
        ["Revenue", data.revenue_cards.revenue || ""],
      ],
    };

    exportToExcel(dataToExport, "data_export");
  };

  return (
      <Button onClick={handleDownload}>Download Data as Excel</Button>
  );
};

export default ExcelDownloadButton;
