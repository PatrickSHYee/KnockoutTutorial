/* Knockout.js tutorial */
function AppViewModel() {
    this.fName = "Patrick";
    this.lName = "Yee";
}

// Activate knockout.js
ko.applyBindings(new AppViewModel());