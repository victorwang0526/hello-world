var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name Hello World
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HelloWorld } from '@ionic-native/hello-world';
 *
 *
 * constructor(private helloWorld: HelloWorld) { }
 *
 * ...
 *
 *
 * this.helloWorld.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    HelloWorld.prototype.nativeToast = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    HelloWorld.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", Promise)
    ], HelloWorld.prototype, "nativeToast", null);
    /**
     * @name Hello World
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { HelloWorld } from '@ionic-native/hello-world';
     *
     *
     * constructor(private helloWorld: HelloWorld) { }
     *
     * ...
     *
     *
     * this.helloWorld.functionName('Hello', 123)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    HelloWorld = __decorate([
        Plugin({
            pluginName: 'HelloWorld',
            plugin: 'cordova-plugin-hello-world',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'cordova.plugins.HelloWorld',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: '',
            // the github repository URL for the plugin
            install: '',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], HelloWorld);
    return HelloWorld;
}(IonicNativePlugin));
export { HelloWorld };
//# sourceMappingURL=index.js.map
