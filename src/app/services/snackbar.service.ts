import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _saackBar: MatSnackBar) { }
  onOpenSnackbar(message:string){
    //alert(message)
    this._saackBar.open(message,"close",{
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:"top"
    })
  }
}
