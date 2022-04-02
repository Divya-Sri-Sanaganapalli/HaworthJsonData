//const fs = require("fs");
const express = require('express');
const app = express();
const port = 5000;
const request = require('request');

let url = "https://core.dxpapi.com/api/v1/core/?account_id=6389&auth_key=eqhxkdsbygtczs8i&domain_key=haworth&request_id=7364387489939&_br_uid_2=uid%3D7939424216637%3Av%3D15.0%3Ats%3D1648664090612%3Ahc%3D8&url=https://www.haworth.com/na/en/products/seating.html&ref_url=https://www.haworth.com/na/en/products/seating.html&request_type=search&rows=24&start=0&fl=pid,url,title,description,categories,subcategories,brand,configurator_url,designers,view_id,price,sale_price,thumb_image,url,price_range,sale_price_range,variants,dyo_attribute,variations_available&q=52&search_type=category&view_id=north_america"
let options = {json: true};


app.get('/createProductData', async (req, res) => {
    request(url, options, (error, res, body) => {
        if(error){
            res.status(500).json({
                error: {
                    message: "Error retrieving the data from web"
                }
            })
        }else{
            console.log(body)
        }
    })
})
app.listen(port, () => {
    console.log('The server is running on port', port);
});