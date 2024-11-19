import { ToWords } from "./ToWords";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { CurrencyToLocaleConverter } from "./CurrencyLocalMap";

export class CurrencyInWords implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _labelElement: HTMLLabelElement;
    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private currencyLocaleCode: string = "en-IN";
    private amount: number;
    private CurrencyLookup: ComponentFramework.LookupValue;

    private ones: string[] = ["", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "];
    private tens: string[] = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    //Code Starts

    /**
     * Empty constructor.
     */
    constructor() {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        // Add control initialization code
        
        this._context = context;
        this._container = container;
        this._labelElement = document.createElement("label");
        this._labelElement.setAttribute("id", "labelID");
        this._labelElement.innerHTML = "NA";
        this._container.appendChild(this._labelElement);
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._context = context;
        this.amount = context.parameters.AmountValue.raw!;
        this.CurrencyLookup = context.parameters.CurrencyLookup.raw[0];
        const CurrencyLocalCodeConverter = new CurrencyToLocaleConverter();
        this.GetCurrencnyLocaleCode(CurrencyLocalCodeConverter);
        //console.log("Calling Label with Amount " + this.amount + " and Currency " + this.currencyLocaleCode);
        this._labelElement.innerHTML = this.numberToWords1(this.amount!, this.currencyLocaleCode).toUpperCase();

    }

    private GetCurrencnyLocaleCode(CurrencyLocalCodeConverter: CurrencyToLocaleConverter) {
        if (this.CurrencyLookup != null && this.CurrencyLookup.id != null) {
            Xrm.WebApi.retrieveRecord("transactioncurrency", this.CurrencyLookup.id, "?$select=isocurrencycode")
                .then(
                    (result) => {
                        //console.log(result);
                        const isocurrencycode: string = result.isocurrencycode; // Text
                        this.currencyLocaleCode = CurrencyLocalCodeConverter.getLocaleByCurrency(isocurrencycode);
                        //console.log("Current Record : " + this.currencyLocaleCode);
                        return;
                    }
                )
                .catch((error) => {
                    // In a real scenario, `error` could be a string or an `Error` object
                    console.log(error.message || error);
                });

        }
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
        //this._numberInput.removeEventListener("input", this.handleInputChange);
    }

    private numberToWords1(num: number, currencyLocaleCode: string): string {
        const toWords = new ToWords({
            localeCode: currencyLocaleCode,
            converterOptions: {
                currency: true,
                ignoreDecimal: false,
                ignoreZeroCurrency: false,
                doNotAddOnly: false
            },
        });
        //console.log("Converting for " + this.currencyLocaleCode);
        const words = toWords.convert(num);
       //console.log("Converted " + words);
        return words.trim(); // Removes any extra spaces at the end

    }
}
