const bcrypt = require('bcrypt');

const saltRounds = process.env.SALT_ROUNDS;

export function hashPassword(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

export function verifyPassword(inputPassword: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(inputPassword, hashedPassword);
}
