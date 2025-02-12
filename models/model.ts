import mongoose, { Schema, Document, model, models } from "mongoose";

// Definir la interfaz para TypeScript
export interface IUser extends Document {
  name: string;
  email: string;
}

// Definir el esquema
const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Exportar el modelo
export default models.User || model<IUser>("User", UserSchema);
