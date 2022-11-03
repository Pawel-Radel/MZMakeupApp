import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private notification: MatSnackBar) {
  }

  showMessage(message: string, duration: number = 2000): void {
    this.notification.open(message, 'Zamknij', {verticalPosition: 'top', duration, politeness: 'polite'});
  }
}
