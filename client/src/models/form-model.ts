import { FunctionComponent } from "react";
import { FieldValues, UseFormRegister , Control} from 'react-hook-form';
import { GridSize, OutlinedInputProps } from "@material-ui/core";

export class FormGroupModel {
  constructor(
    public id?: string,
    public title?: any,
    public divider?: boolean,
    public controls?: FormInputModel[],
    ) { }
  }
  
  export class FormInputModel {
    constructor(
    public id?: string,
    public size?: GridSize,
    public key?: string, 
    public autoFocus?: boolean, 
    public variant?: "standard" | "filled" | "outlined",
    public type?: string,
    public label?: string,
    public message?: string,
    public helperText?: string,
    public render? : boolean,
    public register?:  UseFormRegister<FieldValues>,
    public watch?, 
    public control?: Control<FieldValues>,
    public Component? : FunctionComponent,
    public formInputProps?: FormInputPropsModel,
  ) { }
}

export class FormInputPropsModel {
  constructor(
    public offset?: boolean,
    public size?: GridSize,
    public select?: boolean,
    public selectOptions?: {value : string, label : string}[],
    public inputProps?: Partial<OutlinedInputProps>,
  ) { }
}