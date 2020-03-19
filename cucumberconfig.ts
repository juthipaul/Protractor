// An example configuration file
import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";

exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    //Capabilities to be passed to the webdriver instance.
    capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    }
    },
   // esModuleInterop: true,
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
   
    //tags: "sanityTesting",
    cucumberOpts: {
      //tags:"@angulartesting",
      format:"json:./cucumberreport.json",
             // require step definitions
        require: [
          '../JSFiles/stepDefinitions/steps.js' // accepts a glob
        ]
      },
      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          output: './cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"2.8.0",
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
  