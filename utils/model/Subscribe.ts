import { Schema, Document, model, models } from "mongoose";

// Define the user interface
interface ISubscribe extends Document {
    email: string;
    createAt: Date;
}

// Define the schema
const SubscribeSchema = new Schema<ISubscribe>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

// Export the model (prevents re-registering)
const Subscribe = models.Subscribe || model<ISubscribe>("Subscribe", SubscribeSchema);

export default Subscribe;