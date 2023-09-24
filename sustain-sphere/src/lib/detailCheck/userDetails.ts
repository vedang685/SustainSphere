import axios from "axios";

export async function checkUserDetails(email: string | null | undefined) {
    const response = await axios.post('http://localhost:5000/api/auth/detailsFilled',{
        email : email,
    })
    return response.data.detailsFilled
}
