import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { email: 'saurav@gmail.com', password: 'srk123' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    return user !== undefined;
  }
}
