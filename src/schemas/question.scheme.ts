import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Question extends Document {
  
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
