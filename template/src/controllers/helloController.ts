import { Request, Response } from 'express';

export const sayHello = (req: Request, res: Response): void => {
  const name = req.query.name || 'World';
  res.send(`Hello, ${name}!`);
};
