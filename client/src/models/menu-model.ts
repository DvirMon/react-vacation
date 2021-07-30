import { UserModel } from "./user-model";

export class MenuModel { 

  public constructor(
    public user?: UserModel,
    public isLoggedIn?: boolean,
    public register?: boolean,
    public admin?: boolean,
    public logoutButton?: boolean,
    public followUpCounter?: number,

  ) { }


} 
