import { Injectable } from '@nestjs/common';

// what a user IS in our system
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@doe' },
    { id: 2, name: 'Adrian', email: 'adrian@kelm' },
  ];

  findAllUsers(name: string = '') {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  // - this.users — this refers to the UserService instance,
  // so this reads the private array declared on line 11.
  // Without this., TypeScript would look for a local variable named users and error.
}
