let db;
const request = window.indexedDB.open("budgetDB", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", {autoincrement: true});
};
