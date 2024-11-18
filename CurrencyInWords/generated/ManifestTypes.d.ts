/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    result: ComponentFramework.PropertyTypes.StringProperty;
    AmountValue: ComponentFramework.PropertyTypes.NumberProperty;
    CurrencyLookup: ComponentFramework.PropertyTypes.LookupProperty;
}
export interface IOutputs {
    result?: string;
    AmountValue?: number;
    CurrencyLookup?: ComponentFramework.LookupValue[];
}
