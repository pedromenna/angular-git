export class User {
  id?: number;
  username: string;
  password: string;

  constructor(username: string, password: string, id?: number) {
    this.username = username;
    this.password = password;
    if (id) {
      this.id = id;
    }
  }
}