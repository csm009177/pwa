const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// 미들웨어
app.use(bodyParser());

// 에러 핸들링 미들웨어
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { error: err.message };
    console.error('에러:', err);
  }
});

// 라우트 정의
router.get('/', async (ctx) => {
  ctx.body = { message: 'Hello World from Koa!' };
});

router.get('/api/users', async (ctx) => {
  ctx.body = { users: ['Alice', 'Bob', 'Charlie'] };
});

router.post('/api/users', async (ctx) => {
  const user = ctx.request.body;
  console.log('새 사용자:', user);
  ctx.body = { message: '사용자가 생성되었습니다', user };
});

// 라우터 적용
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('Koa 서버가 http://localhost:8080에서 실행 중입니다');
});
