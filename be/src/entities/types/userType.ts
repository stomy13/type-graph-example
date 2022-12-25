import { registerEnumType } from "type-graphql";

export enum UserRole {
  Admin = '管理者',
  Staff = '担当者',
}

export interface IUser {
  id: number
  name: string
  email: string
  role: UserRole
}

registerEnumType(UserRole, {
  name: "UserRole",
  description: "UserRole",
});