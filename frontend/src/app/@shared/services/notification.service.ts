import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: 'root' })
export class NotificationService {
    constructor(private snackbar:MatSnackBar){}

    showSnackbar(msg:string, duration:number = 2000) {
        this.snackbar.open(msg, null, { duration: duration });
    }
    snackbarWithAction(msg:string, action:string){
        this.snackbar.open(msg, action);
    }
}
