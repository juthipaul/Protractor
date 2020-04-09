"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class library {
    constructor() {
        this.filterHeader = protractor_1.element(protractor_1.by.tagName("h5"));
        this.allLabels = protractor_1.element.all(protractor_1.by.className("sb-prominent-filter-field"));
        this.board = protractor_1.element(protractor_1.by.className("text"));
        this.cls = protractor_1.element.all(protractor_1.by.id("gradeLevel"));
        this.subject = protractor_1.element.all(protractor_1.by.id("subject"));
        //this.medium=element(by.name("sb-prominent-filter-field")).element(by.css("div:nth-child(1)"));
        //this.subject=element(by.name("sb-prominent-filter-field")).element(by.css("div:nth-child(1)"));
    }
}
exports.library = library;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Byb3RyYWN0b3IvcGFnZU9iamVjdHMvbGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEyRTtBQUUzRSxNQUFhLE9BQU87SUFPaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzQyxnR0FBZ0c7UUFDaEcsaUdBQWlHO0lBQ3JHLENBQUM7Q0FDSjtBQWhCRCwwQkFnQkMifQ==