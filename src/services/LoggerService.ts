import type { LogEntry } from '../types';

/**
 * TIER 3: Data Persistence Layer (Logging)
 * 
 * Responsible for safe writing of logs.
 * In the Python requirements, this used a Mutex Lock for Excel writing.
 * In the Browser, we maintain state and provide an export function.
 * 
 * Principle: Single Responsibility (SRP) - This class only cares about logs.
 */
export class LoggerService {
  private logs: LogEntry[] = [];

  // Mimics "appending" to a file
  public logSearch(query: string, found: boolean): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      query: query,
      resultFound: found
    };
    this.logs.push(entry);
    console.log("LoggerService: Record added", entry);
  }

  // Mimics the "Excel" requirement by generating a CSV which opens in Excel
  public downloadLogsAsExcel(): void {
    if (this.logs.length === 0) {
      alert("No logs to export.");
      return;
    }

    // CSV Header
    let csvContent = "data:text/csv;charset=utf-8,Timestamp,Query,Result Found\n";

    // CSV Rows
    this.logs.forEach((row) => {
      csvContent += `${row.timestamp},"${row.query}",${row.resultFound}\n`;
    });

    // Trigger Download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "search_access_log.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Singleton instance
export const loggerService = new LoggerService();
