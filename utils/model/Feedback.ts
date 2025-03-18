import { Schema, Document, model, models } from "mongoose";

// Define the user interface
interface IFeedback extends Document {
    firstname: string;
    lastname: string;
    description: string;
    createAt: Date;
}

// Define the schema
const FeedbackSchema = new Schema<IFeedback>({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

// Export the model (prevents re-registering)
const Feedback = models.Feedback || model<IFeedback>("Feedback", FeedbackSchema);

export default Feedback;