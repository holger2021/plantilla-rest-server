const { Router } = require('express');
const router = Router();
const {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
} = require('../controllers/users-controller');

router.get('/', usersGet);

router.post('/:id', usersPost);

router.put('/', usersPut);

router.patch('/', usersPatch);

router.delete('/', usersDelete);

module.exports = router;
