import requestApi from "../utils/requestApi";

export const getAllProductService = async () => {
    try {
        const respone = await requestApi({
            method: 'get', 
            url: "product",
        });
        return respone;
    } catch (error) {
        return error;
    }
}