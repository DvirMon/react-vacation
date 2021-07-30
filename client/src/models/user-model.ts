export class LoginModel {

  public constructor(
    public username?: string,
    public password?: string
  ) {
  }

}

export class RegisterModel extends LoginModel {

  public constructor(
    public firstName?: string,
    public lastName?: string,
    username?: string,
    password?: string,
  ) {
    super(username, password)
  }
}



export class UserModel extends RegisterModel {

  public constructor(
    public isAdmin?: number,
    public uuid?: string,
    firstName?: string,
    lastName?: string,
    username?: string,
    password?: string
  ) {
    super(firstName, lastName, username, password)
  }
}

