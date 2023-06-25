require("dotenv").config();
const { getRepositories } = require("./src/api/github");
const { saveInCsv } = require("./src/libs/csv-handler");
const { saveInJson } = require("./src/libs/json-handler");

(async () => {
  const data = await getRepositories();
  saveInCsv(data, {
    autoGenerateHeader: true,
    saveHeaders: true,
    path: "data-generated",
    fileName: "github-inventory.csv",
  });

  saveInJson(data);
})();
