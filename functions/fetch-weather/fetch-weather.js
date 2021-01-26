/**
 * How to use Netlify functions.
 * 1. Create netlify.toml at project https://docs.netlify.com/configure-builds/file-based-configuration
 * 2. Create a new directory at base project and new JS file.
 * 3. Declare a function and export (ES5 only) and return a statusCode and body.
 * 4. Make an HTTP request
 * 5. At Client side, make HTTP request at `/.netlify/function_folder_name/your_JS_file?your_parameter=your_value`
 * . (Optional) Use Try/Catch block.
 */

const axios = require('axios');
const handler = async (event) => {
  const { city } = event.queryStringParameters;
  const api = process.env.OPENWEATHER_API;
  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${api}&units=metric`);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};
module.exports = { handler };
