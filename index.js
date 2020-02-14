const express =require('express');// essentially JS 
#includeconst app =express();
// Create express object
const PORT =80;// Default port for HTTP is 80// We set up a function that will execute on the defualt route when a user attempt to GET
// this resource  which immediatly sends back "Hello, World!"
app.get('/',(request, response)=>{ response.send('Hello, World!');});
// Listen to our PORT and execute the function when the PORT is set up
app.listen(PORT,()=> console.log(`App is listenting on PORT: ${PORT}`));