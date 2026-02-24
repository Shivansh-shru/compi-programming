import { Inngest } from "inngest";
import { connectDB } from "./db";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "Codesk" });

const synuser = inngest.createFunction(
  { name: "Sync Users" },
  { event: "clerk/  user.created" },
  async ({ event }) => {
    await connectDB();
    const { id, email_addresses, first_name, last_name,image_url } = event.data;
    const newUser = {
      id: id,
      email: email_addresses[0].email_address,
      name: `${first_name || ""} ${last_name|| ""}`,
      image_url: image_url,
    };
    await User.create(newUser);
  }
);
const deleteuser = inngest.createFunction(
  { name: "Delete Users" },
  { event: "clerk/  user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({  id: id });
  }
);
export const functions = [synuser, deleteuser];