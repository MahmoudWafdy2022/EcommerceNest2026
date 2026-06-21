import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: true,
    type: String,
    minlength: [3, 'Name must be at least 3 characters'],
    maxlength: [30, 'Name must be at most 50 characters'],
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    type: String,
    // match: [/.+@.+\..+/, 'Please fill a valid email address'],
  })
  email: string;

  @Prop({
    required: true,
    type: String,
    minlength: [6, 'Password must be at least 6 characters'],
    maxLength: [20, 'Password must be at most 20 characters'],
  })
  password: string;

  @Prop({
    required: true,
    type: String,
    enum: ['user', 'admin', 'manager'],
    default: 'user',
  })
  role: string;
  @Prop({
    type: String,
  })
  avatar: string;
  @Prop({
    type: Number,
  })
  age: number;

  @Prop({
    type: String,
  })
  phonenumber: string;

  @Prop({
    type: String,
  })
  address: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  active: boolean;

  @Prop({
    type: String,
  })
  verificationCode: string;

  @Prop({
    type: String,
    enum: ['male', 'female'],
  })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
