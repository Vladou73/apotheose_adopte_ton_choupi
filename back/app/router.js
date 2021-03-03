const { Router } = require('express');

const router = Router();

router.get('/', (req, res)=>{

    
    console.log('Hello World');
    res.send('hello world');
});

module.exports = router;