"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = require("cucumber-html-reporter");
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'firefox'
    },
    // esModuleInterop: true,
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    //tags: "sanityTesting",
    cucumberOpts: {
        //tags:"@angulartesting",
        format: "json:./cucumberreport.json",
        // require step definitions
        require: [
            '../JSFiles/stepDefinitions/steps.js' // accepts a glob
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
    // Options to be passed to Jasmine-node.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9Qcm90cmFjdG9yL2N1Y3VtYmVyY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsbURBQW1EO0FBRW5ELE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELHNEQUFzRDtJQUN0RCxZQUFZLEVBQUU7UUFDZCxXQUFXLEVBQUUsU0FBUztLQUNyQjtJQUNGLHlCQUF5QjtJQUN4Qix1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUVuQyx3QkFBd0I7SUFDeEIsWUFBWSxFQUFFO1FBQ1oseUJBQXlCO1FBQ3pCLE1BQU0sRUFBQyw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQ2hDLE9BQU8sRUFBRTtZQUNQLHFDQUFxQyxDQUFDLGlCQUFpQjtTQUN4RDtLQUNGO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHM0IsQ0FBQztJQUVILHdDQUF3QztDQUV6QyxDQUFDIn0=