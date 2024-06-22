import { ErrorHandler, Injectable } from "@angular/core";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        if (error.message && error.message.startsWith('NG01352')) {
            // Suppress the specific NG01352 error
            return;
          }
    }
}