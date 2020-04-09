function start() {
  const timestampList = document.getElementById("timestamp-list");
  const element = document.createElement("li");
  element.textContent = "0.0000";
  element.className = "list-group-item";
  timestampList.appendChild(element);

  document.getElementById("start").disabled = true;
  document.getElementById("timestamp").disabled = false;
  document.getElementById("stop").disabled = false;
}

const timestamp = () => {
  const timestampList = document.getElementById("timestamp-list");
  const element = document.createElement("li");
  element.textContent = "timestamp";
  element.className = "list-group-item";
  timestampList.appendChild(element);
};

const stop = () => {
  const timestampList = document.getElementById("timestamp-list");
  const element = document.createElement("li");
  element.textContent = "stop";
  element.className = "list-group-item";
  timestampList.appendChild(element);

  document.getElementById("start").disabled = false;
  document.getElementById("timestamp").disabled = true;
  document.getElementById("stop").disabled = true;
};
