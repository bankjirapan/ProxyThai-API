import config from "./config/config";

const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

app.get("/", (req, res) => {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.goto("http://www.gatherproxy.com/proxylist/country/?c=Thailand");

    const proxyData = await page.evaluate(() => {
      const tables = Array.from(
        document.querySelectorAll("#tblproxy > tbody > tr ")
      );

      return proxy = tables.map(proxyRes => {
          return proxyRes.innerHTML;
      });
    });
    let temp;
    for (let i = 0; i < proxyData.length; i++) {  
        temp = proxyData[i].split(" ");
        console.log(temp);
    }
        // console.log(proxyData);
    // res.send(proxyData);

    await browser.close();
  })();
});

app.listen(config.port, () => {
  console.log("Proxy Server api started port :", config.port);
});
