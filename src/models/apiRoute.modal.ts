import {ObjectId} from "mongodb";

export default class ApiRoute {
    constructor(public projectId: ObjectId, public path: string, public method: string, public type: string,
                public respone: JSON, public dbCollection: string, public requiresAuth: boolean, public id?: ObjectId ) {
    }
}