import { Schema, model, Document } from 'mongoose'


export interface Token extends Document {
    id: string,
    refreshToken: string,
}

const schema = new Schema({
    refreshToken: { type: String, required: true, unique: true },
})

export const token = model<Token>('Token', schema)
