import fastify from 'fastify';
import { transationsRoutes } from './routes/transactions';
import cookie from '@fastify/cookie';

export const app = fastify();
app.register(cookie);

app.register(transationsRoutes, {
	prefix: 'transactions'
});

