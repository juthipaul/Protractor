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
        browserName: 'chrome',
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
            //,'../JSFiles/stepDefinitions/steps1.js'
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
                "App Version": "2.8.0",
                "Test Environment": "STAGING",
                "Browser": "Chrome  80.0.3987.116",
                "Platform": "MAC OS",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
    // Options to be passed to Jasmine-node.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1EQUFtRDtBQUVuRCxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxzREFBc0Q7SUFDdEQsWUFBWSxFQUFFO1FBQ2QsV0FBVyxFQUFFLFFBQVE7S0FRcEI7SUFDRix5QkFBeUI7SUFDeEIsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFFbkMsd0JBQXdCO0lBQ3hCLFlBQVksRUFBRTtRQUNaLHlCQUF5QjtRQUN6QixNQUFNLEVBQUMsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUNoQyxPQUFPLEVBQUU7WUFDUCxxQ0FBcUMsQ0FBQyxpQkFBaUI7WUFDdkQseUNBQXlDO1NBQzFDO0tBQ0Y7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUczQixDQUFDO0lBRUgsd0NBQXdDO0NBRXpDLENBQUMifQ==