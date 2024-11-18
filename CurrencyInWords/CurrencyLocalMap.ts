export class CurrencyToLocaleConverter {
    private currencyMap: { [currencyCode: string]: { country: string, language: string, locale: string } };

    constructor() {
        // Mapping of currency codes to country, language, and locale
        this.currencyMap = {
            'AED': { country: 'UAE', language: 'English', locale: 'en-AE' },
            'BDT': { country: 'Bangladesh', language: 'English', locale: 'en-BD' },
            'GBP': { country: 'UK', language: 'English', locale: 'en-GB' },
            'GHS': { country: 'Ghana', language: 'English', locale: 'en-GH' },
            'EUR': { country: 'Ireland', language: 'English', locale: 'en-IE' },
            'INR': { country: 'India', language: 'English', locale: 'en-IN' },
            'MMK': { country: 'Myanmar', language: 'English', locale: 'en-MM' },
            'MUR': { country: 'Mauritius', language: 'English', locale: 'en-MU' },
            'NGN': { country: 'Nigeria', language: 'English', locale: 'en-NG' },
            'NPR': { country: 'Nepal', language: 'English', locale: 'en-NP' },
            'USD': { country: 'USA', language: 'English', locale: 'en-US' },
            'PHP': { country: 'Philippines', language: 'English', locale: 'en-PH' },
            'EEK': { country: 'Estonia', language: 'Estonian', locale: 'ee-EE' },
            'IRR': { country: 'Iran', language: 'Persian', locale: 'fa-IR' },
            'BEL': { country: 'Belgium', language: 'French', locale: 'fr-BE' },
            'FRF': { country: 'France', language: 'French', locale: 'fr-FR' },
            'INR-G': { country: 'India', language: 'Gujarati', locale: 'gu-IN' },
            'INR-H': { country: 'India', language: 'Hindi', locale: 'hi-IN' },
            'INR-M': { country: 'India', language: 'Marathi', locale: 'mr-IN' },
            'SRD': { country: 'Suriname', language: 'Dutch', locale: 'nl-SR' },
            'BRL': { country: 'Brazil', language: 'Portuguese', locale: 'pt-BR' },
            'TRY': { country: 'Turkey', language: 'Turkish', locale: 'tr-TR' },
            'KRW': { country: 'Korean, Republic of', language: 'Hangul', locale: 'ko-KR' }
        };
    }

    public getLocaleByCurrency(currencyCode: string): string {
        const mapping = this.currencyMap[currencyCode];

        if (mapping) {
            return mapping.locale;
        } else {
            return `Locale not found for currency code ${currencyCode}`;
        }
    }
}
