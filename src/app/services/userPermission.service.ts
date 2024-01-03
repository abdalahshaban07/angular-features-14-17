import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionService {
  isAdmin(): boolean {
    return false;
  }
}
