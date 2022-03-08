import express from 'express';
import { getCharacters } from '../controllers/character.controller';

const router = express.Router();
router.get('/:id', getCharacters);

export default router;
