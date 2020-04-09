"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class explore {
    //Constructor
    constructor() {
        this.libraryLink = protractor_1.element(protractor_1.by.partialLinkText("Library"));
        this.trainingsLink = protractor_1.element(protractor_1.by.partialLinkText("Trainings"));
        this.submitButton = protractor_1.element(protractor_1.by.buttonText("Submit"));
        //this.featureViewAll=element(by.css("button[class='sb-btn sb-btn-xs sb-btn-secondary ml-auto']")).element(by.css("th:nth-child(1)"))
        this.featureViewAll = protractor_1.element(protractor_1.by.css("button[class='sb-btn sb-btn-xs sb-btn-secondary ml-auto']"));
        this.loginLink = protractor_1.element(protractor_1.by.partialLinkText("Login"));
    }
}
exports.explore = explore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Byb3RyYWN0b3IvcGFnZU9iamVjdHMvZXhwbG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLE9BQU87SUFhcEIsYUFBYTtJQUNiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkQscUlBQXFJO1FBQ3JJLElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBR3hELENBQUM7Q0FFQTtBQXpCRCwwQkF5QkMifQ==