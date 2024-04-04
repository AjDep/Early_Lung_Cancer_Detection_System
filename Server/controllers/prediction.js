module.exports.detection = async (req, res,formData, deviceData) => {
    
    let featureString = ""; 

    for (let key in formData) {
        if (formData.hasOwnProperty(key)) {
            value = formData[key];
            if(value == true){
                featureString+="1";
            }else{
                featureString+="0";
            }
        }
    }

    const alkanePercentage = deviceData;
    const features = featureString;
    console.log("Alkane Prectage line 18",alkanePercentage);
    const axios = require('axios');

    try {
        const apiURL = "http://127.0.0.1:5000/predict";
        console.log("line 23 in prediction.js");
        const response = await axios.get(apiURL, {
            params: {
                alkanePercentage: alkanePercentage,
                features: features,
            },
        });
        return response.data;
            // Handle successful response
            // res
            //     // .status(201)
            //     .json({"Cancer Status":response.data})
        // })
        // .catch((error) => {
        //     console.error(error); // Handle error
        // });
    }
    catch (error) {
        console.log("Error line 59 ",error.message);
    }
}