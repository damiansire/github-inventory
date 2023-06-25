const fs = require("fs");

const saveInJson = (obj) => {
  const jsonString = JSON.stringify(obj);
  const filePath = "github-inventory.json";

  fs.writeFile(filePath, jsonString, "utf8", (error) => {
    if (error) {
      console.error("Error al escribir el archivo:", error);
    } else {
      console.log("El objeto se ha guardado como JSON correctamente.");
    }
  });
};

module.exports = { saveInJson };
