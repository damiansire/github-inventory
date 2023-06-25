const fs = require("fs");
const path = require("path");
const { getUniqueKeysFromArrayOfObjets } = require("./array-objects");

const safeCsvValue = (value) => {
  if (typeof value === "string" && value.includes(",")) {
    return `"${value}"`;
  } else if (typeof value === "number" && value.toString().includes(",")) {
    return `"${value}"`;
  }
  return value;
};

function saveInCsv(data, options = {}) {
  const csvPath = options.path || "";
  const fileName = options.fileName || "objetos.csv";
  const finalPath = path.join(csvPath, fileName);

  let headers = options.headers;
  if (options.autoGenerateHeader) {
    headers = getUniqueKeysFromArrayOfObjets(data);
  }

  let csvData = [];

  if (headers) {
    for (element of data) {
      const obj = {};
      for (header of headers) {
        obj[header] = safeCsvValue(element[header]);
      }
      csvData.push(obj);
    }
  }

  csvData = csvData.length == 0 ? data : csvData;

  csvString = csvData.map((objeto) => Object.values(objeto).join(",")).join("\n");

  if (options.saveHeaders) {
    const headerRow = headers.join(",") + "\n";
    csvString = headerRow + csvString;
  }
  // Guardar el CSV en un archivo
  fs.writeFileSync(finalPath, csvString);
}

module.exports = { saveInCsv };
