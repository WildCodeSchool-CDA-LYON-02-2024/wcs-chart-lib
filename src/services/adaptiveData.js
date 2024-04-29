const adaptiveData = (cfg, data) => {
  if (cfg === true) {
    return data[0];
  }
  return data;
};

const findMinValue = (data) => {
  const newTab = [];
  let fullData = null;
  if (data.length === 1) {
    return Math.min(...data[0]);
  } else fullData = newTab.concat(...data);

  return Math.min(...fullData);
};

const findMaxValue = (data) => {
  const newTab = [];
  let fullData = null;
  if (data.length === 1) {
    return Math.max(...data[0]);
  } else fullData = newTab.concat(...data);

  return Math.max(...fullData);
};

export { adaptiveData, findMinValue, findMaxValue };
