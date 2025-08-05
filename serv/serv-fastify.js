const fastify = require('fastify')({ logger: true });

// 스키마 정의로 자동 검증
const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
};

// 라우트 등록
fastify.get('/', opts, async (request, reply) => {
  return { hello: 'world from Fastify!' };
});

fastify.get('/api/users', async (request, reply) => {
  return { users: ['Alice', 'Bob', 'Charlie'] };
});

// 서버 시작
const start = async () => {
  try {
    await fastify.listen({ port: 8080 });
    console.log('Fastify 서버가 http://localhost:8080에서 실행 중입니다');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
