import axios from "axios";

export async function checkUserDetails(email: string | null | undefined) {
    const response = await axios.post(`${process.env.BACKEND_BASE_URL}api/auth/detailsFilled`,{
        email : email,
    })
    return response.data.detailsFilled
}
