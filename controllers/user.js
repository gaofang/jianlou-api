var hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello,${name}<h1>`;
};

module.exports = {
    'GET /test/:user': hello
}