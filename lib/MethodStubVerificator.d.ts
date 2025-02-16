import { MethodToStub } from "./MethodToStub";
export declare class MethodStubVerificator<T> {
    private methodToVerify;
    private methodCallToStringConverter;
    constructor(methodToVerify: MethodToStub);
    called(): void;
    never(): void;
    once(): void;
    twice(): void;
    thrice(): void;
    times(value: number): void;
    atLeast(value: number): void;
    atMost(value: number): void;
    calledBefore(method: any): void;
    calledAfter(method: any): void;
    private actualCalls;
}
