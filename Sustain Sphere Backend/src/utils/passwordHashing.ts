const bcrypt = require ('bcrypt');

const saltRounds = process.env.SALT_ROUNDS;

export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
}

export async function verifyPassword(inputPassword: string, hashedPassword:any): Promise<boolean> {
    return await bcrypt.compare(inputPassword, hashedPassword);
}
