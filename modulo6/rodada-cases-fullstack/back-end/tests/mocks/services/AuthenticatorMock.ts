import { USER_ROLES } from "../../../src/models/User"
import { ITokenPayload } from "../../../src/services/Authenticator"

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        switch(payload.id) {
            case "101":
                return "token-eliz"
            default:
                return "token-mock"
        }
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        switch(token) {
            case "token-eliz":
                return {
                    id: "101",
                    role: USER_ROLES.ADMIN
                }
            case "token-mock":
                return {
                    id: "id-mock",
                    role: USER_ROLES.CLIENT
                }
            default:
                return null
        }
    }
}