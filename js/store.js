const set = (key, item) => {
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
    return get("model");
  } catch (e) {
    console.log(e.message);
  }
};

const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e.message);
  }
};

const INIT_MODEL = {
  isModalSettingsOpen: false,
  //darkMode: false,
  items: [],
};

set("model", INIT_MODEL);

const changeDisplayedModel = (jsonFile) => {
  const model = get("model");

  model.items = jsonFile.data;
  set('model', model);
}

const renderModel = (modelContainer, modelItems, hideBg = null) => {
  let model = get("model");

  if(model.isModalSettingsOpen) {
    modelContainer.style.display = 'block';
    //model.items = modelItems;
    model = set("model", { ...model, items : modelItems });
  }
  else {
    modelContainer.style.display = "none";
    //model.items = '';
    model = set("model", { ...model, items : '' })
  }

  modelContainer.innerHTML = model.items;

  // Close model button
  const closeButton = document.querySelector('#closeModel');
  closeButton?.addEventListener("click", (e) => {
    model = set("model", { ...model, isModalSettingsOpen: false });
    
    hideBg !== null && hideBg(model.isModalSettingsOpen);
    renderModel(modelContainer, modelItems);
  });
  
}

export default { 
  set, 
  get, 
  changeDisplayedModel,
  renderModel 
};
