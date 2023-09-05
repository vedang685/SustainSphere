import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
})

const Users = mongoose.models.Users || mongoose.model('Users', userSchema);
export default Users;
