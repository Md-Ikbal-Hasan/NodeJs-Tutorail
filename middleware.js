module.exports = reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send(' <h1> Please provide age </h1>')
    } else if (req.query.age < 18) {
        resp.send(' <h1>  You  can not access this page.You are under 18 </h1>')
    }
    else {
        next();

    }
}