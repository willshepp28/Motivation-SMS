const router = require("express").Router();
const axios = require("axios");
const chalk = require("chalk");
const cron = require("node-cron");


router.get("/quote", async (request, response) => {

    try {
        const quote = await axios.get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1");
        console.log(chalk.blue(quote.data[0].content));
        return response.status(200).send(quote.data[0].content);
    } catch (error) {
        console.log(error);
        return response.status(500).json(error);
    }

});



router.get("/quoteCron", async (request, response) => {

    
    try {
        const quote = await axios.get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1");
        cron.schedule('* * * * *', () => {
            console.log(chalk.blue(quote.data[0].content));
        });
    } catch (error) {
        console.log(error);

    }


    return response.json({ message: "running" });
});

module.exports = router;