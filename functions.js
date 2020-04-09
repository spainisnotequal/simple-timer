let START_TIME = undefined;

const createLiChild = (parentId, textContent) => {
  const timestampList = document.getElementById(parentId);
  const element = document.createElement("li");
  element.textContent = textContent;
  element.className = "list-group-item";
  timestampList.appendChild(element);
};

const clearList = (listId) => {
  const list = document.getElementById(listId);
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const start = () => {
  clearList("timestamp-list");
  createLiChild("timestamp-list", "0.000");
  START_TIME = Date.now();

  document.getElementById("start").disabled = true;
  document.getElementById("timestamp").disabled = false;
  document.getElementById("stop").disabled = false;
};

const timestamp = () => {
  createLiChild("timestamp-list", (Date.now() - START_TIME) / 1000);
};

const stop = () => {
  document.getElementById("start").disabled = false;
  document.getElementById("timestamp").disabled = true;
  document.getElementById("stop").disabled = true;
};
