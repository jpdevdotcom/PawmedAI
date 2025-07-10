import express from 'express';
import { mainController } from '../controller/main_controller';

export const mainRoute = express.Router();

mainRoute.get('/', mainController);

