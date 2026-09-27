function startStore() {
  const message = document.getElementById("message");

  message.textContent =
    "Your store setup is ready for the next step.";

  message.style.color = "green";
}


function createStore() {
  const storeName =
    document.getElementById("storeName").value;

  if (storeName.trim() === "") {
    alert("Please enter a store name.");
    return;
  }

  localStorage.setItem(
    "launchshop_store_name",
    storeName
  );

  alert(
    "Store saved: " + storeName
  );
}


function loadStore() {
  const savedStore =
    localStorage.getItem(
      "launchshop_store_name"
    );

  if (savedStore) {
    const storeName =
      document.getElementById("storeName");

    if (storeName) {
      storeName.value = savedStore;
    }
  }
}


document.addEventListener(
  "DOMContentLoaded",
  function () {
    loadStore();
  }
);
