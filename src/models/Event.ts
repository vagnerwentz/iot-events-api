import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
    type: string;
    deviceId: string;
    timestamp: Date;
    details?: string;
}

const EventSchema: Schema = new Schema({
    type: { type: String, required: true },
    deviceId: { type: String, required: true },
    timestamp: { type: Date, required: true },
    details: { type: String }
  });
  
  export default mongoose.model<IEvent>("Event", EventSchema);