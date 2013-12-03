/// <reference path="../Scripts/knockout-2.3.0.js"/>
/// <reference path="../Scripts/jquery-2.0.3.js"/>

function KanbanViewModel() {
    this.title = 'My board';
}

$(document).ready(function() {
// Activates knockout.js
    ko.applyBindings(new KanbanViewModel());
});