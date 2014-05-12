/// <reference path="meteor-angularite.d.ts" />

Angularite.setTemplateDelimeter('[[', ']]');

var module = Angularite.module('test', ['test']);
module.setTemplateDelimeter('{{', '}}');
