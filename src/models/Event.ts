import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
    type: string;
    deviceId: string;
    timestamp: Date;
    details?: string;
}