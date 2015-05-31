/* Knockout.js Tutorals */
function ContactViewModel() {
    this.firstName = ko.observable("Patrick");
    this.lastName = ko.observable("Yee");
    this.email = ko.observable("theMan@bigCompany.com");
    this.num_Phone = ko.observable("720-123-4567");
    this.subject = ko.observable("Job for you");
    this.message = ko.observable("You are great...");

    // using the compute function
    this.fullName = ko.computed(function () {
        return this.firstName() + " " + this.lastName();
    }, this);

    this.capLastName = function () {
        var curr = this.lastName();
        this.lastName(curr.toUpperCase());
        curr = this.firstName();
        this.firstName(curr.toLowerCase());
    };

    this.capFirstName = function () {
        var curr = this.firstName();
        this.firstName(curr.toUpperCase());
        curr = this.lastName();
        this.lastName(curr.toLowerCase());
    };

    this.capFullName = function () {
        var curr = this.firstName();
        this.firstName(curr.toUpperCase());
        curr = this.lastName();
        this.lastName(curr.toUpperCase());
    }

    this.levels = [
        { level: "Entry", exp: 0 },
        { level: "Junior", exp: 2 },
        { level: "Mid", exp: 4 },
        { level: "Senior", exp: 6 }
    ];
}

// Activate knockout.js
ko.applyBindings(new ContactViewModel());