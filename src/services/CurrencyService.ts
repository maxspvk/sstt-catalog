/**
 * TIER 2: Application Logic (External API Integration)
 * Fetches real-time exchange rates from the National Bank of Ukraine (NBU).
 */

interface NbuRate {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

export const currencyService = {
  /* Asynchronous function for obtaining the exchange rate */
  async getUsdRate(): Promise<number> {
    try {
      // Api request 
      const response = await fetch(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json'
      );

      // Error checking
      if (!response.ok) {
        throw new Error('Failed to fetch currency rate');
      }

      // JSON reading
      const data: NbuRate[] = await response.json();

      // show the exchange rate, or 43, if the request returned something strange
      return data[0]?.rate || 43;
      
    } catch (error) {
      console.error("Currency API Error:", error);
      return 43; // Fallback rate
    }
  }
};