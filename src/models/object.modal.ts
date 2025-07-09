import {ObjectId} from "mongodb";

export default class ObjectDoc {
    constructor(public projectId: ObjectId, public objectName: string, public data: JSON, public id?: ObjectId ) {
    }
}