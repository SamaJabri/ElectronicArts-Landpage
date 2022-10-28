const set = (key, item) => {
    try {
      const jsonItem = JSON.stringify(item);
      localStorage.setItem(key, jsonItem)
    } catch (e) {
      console.log(e.message)
    }
}
const get = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.log(e.message)
    }
}

const INIT_MODEL = {
    darkMode: false,
    items: [],
};
  
// Set initial model
set("model", INIT_MODEL);
  
// write one generic function
//const toggle = (oldModel, prop) => ({ ...oldModel, [prop]: !oldModel[prop] });
/* 
window.onclick = function (event) {
  if(event.target === deleteScreen) {
      deleteScreen.style.display = 'none';
  }
} */

const changeDisplayedModel = (jsonFile) => {
  const model = get("model");

  model.items = jsonFile.data;
  set('model', model);
}

export { set, get, changeDisplayedModel };