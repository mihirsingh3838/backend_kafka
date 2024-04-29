import { Schema, model } from 'mongoose';

const requestSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

export default model('Request', requestSchema);
