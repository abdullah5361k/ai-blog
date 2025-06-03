
import bcryptjs from "bcryptjs";

export const passwordHashing = async (password: string, salt: number) => {
    return await bcryptjs.hash(password, salt);
}


export const passwordCompare = async (password: string, hashedPassword: string ) => {
    return await bcryptjs.compare(
        password,
        hashedPassword
      );
}