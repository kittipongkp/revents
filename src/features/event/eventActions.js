import { CREATE_EVENT } from "./eventConstants"

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: {
            event
        }
    }
}