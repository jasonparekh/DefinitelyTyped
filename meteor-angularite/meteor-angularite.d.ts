// Type definitions for meteor-angularite v0.1.2
// Project: https://github.com/ccll/meteor-angularite/
// Definitions by: Jason Parekh <https://github.com/jasonparekh>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

interface AngulariteStatic {
    setTemplateDelimeter(start:string, end:string): void;
    module(name:string, deps:string[]): ng.IModule;
}

module ng {
    interface IModule {
        setTemplateDelimeter(start:string, end:string): void;
    }
}

declare var Angularite:AngulariteStatic;

