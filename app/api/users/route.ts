import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User, { IUser } from "@/models/User";

// Obtener todos los usuarios
export async function GET() {
  await dbConnect();
  const users: IUser[] = await User.find({});
  return NextResponse.json(users, { status: 200 });
}

// Crear un nuevo usuario
export async function POST(req: Request) {
  await dbConnect();
  try {
    const { name, email } = await req.json();
    const user = await User.create({ name, email });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creando usuario" }, { status: 400 });
  }
}
