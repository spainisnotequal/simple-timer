let START_TIME = undefined;

const createLiChild = (parent, textContent) => {
  const timestampList = document.getElementById(parent);
  const element = document.createElement("li");
  element.textContent = textContent;
  element.className = "list-group-item";
  timestampList.appendChild(element);
};

const start = () => {
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
  const timestampList = document.getElementById("timestamp-list");
  while (timestampList.firstChild) {
    timestampList.removeChild(timestampList.firstChild);
  }

  document.getElementById("start").disabled = false;
  document.getElementById("timestamp").disabled = true;
  document.getElementById("stop").disabled = true;
};
