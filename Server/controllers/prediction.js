module.exports.detection = (req, res, next) => {

    const alkanePercentage = req.body.alkanePercentage;
    const features = req.body.features;
    
    console.log(alkanePercentage, features);
    const axios = require('axios');
    // res
    //     .status(201)
    //     .json({
    //         message: 'Prediction controller accessed'
    //     });

    try {
        const apiURL = "http://127.0.0.1:5000/predict";
        console.log("prediction controller Line 15");
        const response = axios.get(apiURL, {
            params: {
                alkanePercentage: alkanePercentage,
                features: features,
            },
        });
        console.log("Line 22 in predicion.js")
        response.then((response) => {
            console.log("Line 24");
            console.log(response.data);
             // Handle successful response
            res
                .status(201)
                .json({"Cancer Status":response.data})
        })
        .catch((error) => {
            console.error(error); // Handle error
        });
        //console.log(response)
        const predictedCancerStatus = response.data;
        return predictedCancerStatus;
    }
    catch (error) {
        console.log("Error ");
    }
}