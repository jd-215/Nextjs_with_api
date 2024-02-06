import { NextRequest } from "next/server";
import  jwt  from "jsonwebtoken";
import apiErrorResponse from "../apiHandler/apiError";

export const getDataFromToken = (request: NextRequest) => {
    try{
        const token = request.cookies.get("token")?.value || "";
        const tokenDataDecoded : any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
        // console.log(tokenDataDecoded);
        return tokenDataDecoded.id
    }
    catch (error: any) {
        throw apiErrorResponse(error, 400);
    }}