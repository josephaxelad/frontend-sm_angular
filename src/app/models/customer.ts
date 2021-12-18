export class Customer {
  _id? : string;
  user!: User;
  password!: string;
  isDeleted! : boolean;
  isDisabled? : boolean;
}

export class User{
  _id? : string;
  firstname!: string;
  lastname!: string;
  isAdmin?: boolean;
  email!: string;
  sex!: number;
  creationDate!: Date;
}
