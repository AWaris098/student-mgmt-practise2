const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/student-mngmt-practise2',{
    useNewUrlParser : true,
    useUnifiedTopology : true

}).then(() => {
    console.log('Db Succesfully connect')
}).catch((e) => {
    console.log(e)
})