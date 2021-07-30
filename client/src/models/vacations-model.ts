
export class VacationModel {

  constructor(
    public destination?: string,
    public price?: number,
    public startDate?: string,
    public endDate?: string,
    public description?: string,
    public image?: File
  ) {

  }

}

export class UserVacationModel extends VacationModel {

  constructor(
    public followUpID?: number,
    public vacationID?: number,
    destination?: string,
    price?: number,
    startDate?: string,
    endDate?: string,
    description?: string,
    image?: File
  ) {
    super(destination, price, description, startDate, endDate, image)
  }

}

export class FollowUpModel {
  constructor(
    public vacationID: number,
    public userID: string,
  ) { }

}

