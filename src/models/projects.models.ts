import {ObjectId} from "mongodb";

export default class Project {
    constructor(public userId: ObjectId,public name: string, public description: string,
                public createdAt: Number, public updatedAt: Number, public id?: ObjectId ) {
    }
}