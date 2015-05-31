///* Knockout.js - Projects View Model */

// Class to represent a row in the seat reservations grid
function ProjectDetail(name, initLang) {
    var self = this;
    self.name = ko.observable(name);
    self.lang = ko.observable(initLang);

    self.formattedPrice = ko.computed(function () {
        var price = self.lang().price;
        return price ? "$" + price.toFixed(2) : "Free";
    });
}

// Overall viewmodel for this screen, along with initial state
function ProjectsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.programming = [
        { frameLang: "Unreal (C#)", price: 19.99 },
        { frameLang: "KnockoutJS (Javascript)", price: 2.99 },
        { frameLang: "MVC (.NET with C#)", price: 10.99 },
        { frameLang: "HTML and CSS", price: 0 }
    ];

    // Editable data
    self.recent = ko.observableArray([
        new ProjectDetail("Sparrow", self.programming[0]),
        new ProjectDetail("Knock it out!!", self.programming[1])
    ]);
    
    // Operations
    self.addProject = function () {
        self.recent.push(new ProjectDetail("", self.programming[3]));
    };

    self.removeProject = function (project) {
        self.recent.remove(project)
    };
}

ko.applyBindings(new ProjectsViewModel());