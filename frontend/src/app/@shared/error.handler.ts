import { ErrorHandler, Injectable } from "@angular/core";
import { NotificationService } from "./services/notification.service";

@Injectable()
export class JabogErrorHandler implements ErrorHandler {
    constructor(
        private notify:NotificationService
    ) {}

    handleError(error: any){
        console.error("Error: ", error);
        let msg = "Error";
        if(error.status){
            msg += " Code: " + error.status;
        }
        if(error.statusText)
            msg += " Message: " + error.statusText;
        this.notify.snackbarWithAction(msg, "OK");
    }
}