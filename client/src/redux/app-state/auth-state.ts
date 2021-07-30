import { TokensModel } from "../../models/tokens.model";
import { UserModel } from "../../models/user-model";

export class AuthAppState {
  public isLoggedIn: boolean = false; 
  public admin: boolean = false;
  public user: UserModel = new UserModel();
  public tokens: TokensModel = new TokensModel();
  public socket: any

  constructor() {

    const user  = JSON.parse(sessionStorage.getItem('user'))
    if (user) {
      this.user = user
      this.isLoggedIn = this.user !== null;
      this.admin = false
      
      if (this.isLoggedIn) {
        
        // this.tokens.dbToken = JSON.parse(sessionStorage.getItem("jwt"))
        
        if (this.user.isAdmin === 0) {
          this.admin = false
        }
        else {
          this.admin = true
        }
      }
    }
  }
}