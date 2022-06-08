import { MethodAction } from "../MethodAction";
import { MethodToStub } from "../MethodToStub";
export declare class MethodCallToStringConverter {
    convert(method: MethodToStub): string;
    convertActualCalls(calls: MethodAction[]): string[];
}
