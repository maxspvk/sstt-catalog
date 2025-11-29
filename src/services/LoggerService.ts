import type { LogEntry } from '../types';

/*
Responsible for safe writing of logs.
*/
export class LoggerService {
  private logs: LogEntry[] = [];

  /* logging time, query, result */
  public logSearch(query: string, found: boolean): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      query: query,
      resultFound: found
    };
    this.logs.push(entry);
    console.log("LoggerService: Record added", entry);
  }

  /* check if logs exist */
  public downloadLogsAsExcel(): void {
    if (this.logs.length === 0) {
      alert("No logs to export.");
      return;
    }

    /* CSV сonstruction */
    let csvContent = "data:text/csv;charset=utf-8,Timestamp,Query,Result Found\n";

      this.logs.forEach((row) => {
      csvContent += `${row.timestamp},"${row.query}",${row.resultFound}\n`;
    });

    /* Trigger Download */
    const encodedUri = encodeURI(csvContent); // function converts special characters into secure code
    const link = document.createElement("a"); // create a link in memory
    link.setAttribute("href", encodedUri); // paste our entire file contents directly into the address
    link.setAttribute("download", "search_access_log.csv"); // download a file without opening the new page
    document.body.appendChild(link); // add to the page
    link.click(); // program clicks
    document.body.removeChild(link); // remove links from the page
  }
}

// Singleton instance
export const loggerService = new LoggerService();
