let whiteArr = ['/login', '/register'];
const jwt = require('jsonwebtoken');
//定义解密authorToken方法
function MyVerify(authorToken, keys) {
    return new Promise(res => {
        jwt.verify(authorToken, keys, (err, result) => {
            if (err) throw err;
            res(result);
        });
    });
}
module.exports = () => {
    return async(ctx, next) => {
        if (whiteArr.includes(ctx.request.path)) {
            await next();
            return;
        } else {
            let Token = ctx.get('authorToken');
            //没有token
            if (Token === 'know') {
                ctx.body = {
                    code: 3,
                    msg: '没权限，请登录',
                };
                return;
            } else {
                let info;
                info = MyVerify(Token, ctx.app.config.keys);
                console.log(info);
                //挂载到ctx
                ctx.info = info;
                //继续执行
                await next();
            }
        }
    };
};