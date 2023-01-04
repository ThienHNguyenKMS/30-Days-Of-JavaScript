function getAllLanguages() {
  let languages = new Array();
  countries_data.forEach((element) => {
    languages = languages.concat(element["languages"]);
  });

  let languagesCountObj = {};
  languages.forEach((lang) => {
    languagesCountObj[lang] = (languagesCountObj[lang] || 0) + 1;
  });

  let sortable = [];
  for (let lang in languagesCountObj) {
    sortable.push([lang, languagesCountObj[lang]]);
  }

  return sortable.sort((a, b) => {
    return b[1] - a[1];
  });
}

function getPopulation() {
  let populationArr = [];
  let totalPopulation = 0;
  countries_data.forEach((element) => {
    populationArr.push([element["name"], element["population"]]);
    totalPopulation += element["population"];
  });
  populationArr.push(["World", totalPopulation]);

  populationArr.sort((a, b) => {
    return b[1] - a[1];
  });

  populationArr.forEach((element) => {
    element[1] = numberWithCommas(element[1]);
  });

  return populationArr;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
