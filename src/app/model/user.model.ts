export interface LoginDto {
  username: string;
  password: string;
}

export interface RegisterDto extends LoginDto {
  email?: string;
  name?: string;
  surname?: string;
}

export interface ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}
