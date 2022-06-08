import { Matcher } from "./matcher/type/Matcher";
import { MethodAction } from "./MethodAction";
import { MethodStub } from "./stub/MethodStub";
import { ObjectInspector } from "./utils/ObjectInspector";
export declare class Mocker {
    private clazz;
    instance: any;
    mock: any;
    protected objectInspector: ObjectInspector;
    private methodStubCollections;
    private methodActions;
    private mockableFunctionsFinder;
    private objectPropertyCodeRetriever;
    private excludedPropertyNames;
    constructor(clazz: any, instance?: any);
    getMock(): any;
    createCatchAllHandlerForRemainingPropertiesWithoutGetters(): any;
    reset(): void;
    resetCalls(): void;
    getAllMatchingActions(methodName: string, matchers: Array<Matcher>): Array<MethodAction>;
    getFirstMatchingAction(methodName: string, matchers: Array<Matcher>): MethodAction;
    getActionsByName(name: string): MethodAction[];
    protected processProperties(object: any): void;
    protected createInstancePropertyDescriptorListener(key: string, descriptor: PropertyDescriptor, prototype: any): void;
    protected createInstanceActionListener(key: string, prototype: any): void;
    protected createActionListener(key: string): () => any;
    protected getEmptyMethodStub(key: string, args: any[]): MethodStub;
    private processClassCode;
    private processFunctionsCode;
    private createPropertyStub;
    private createMethodStub;
    private createMethodToStub;
    private getMethodStub;
}