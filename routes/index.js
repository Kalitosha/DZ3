const express = require('express');
const router = express.Router();

const ctrlIndex = require('../controllers/index');
const ctrlAdmin = require('../controllers/admin');
const ctrlLogin = require('../controllers/login');

router.get('/', ctrlIndex.getIndex);
router.post('/', ctrlIndex.postIndex);

router.get('/login.html', ctrlLogin.getLogin);
router.post('/login.html', ctrlLogin.postLogin);

router.get('/admin.html', ctrlAdmin.getAdmin);
router.post('/admin.html', ctrlAdmin.postAdmin);

router.post('/admin/skills', ctrlAdmin.postSkills);
router.post('/admin/upload', ctrlAdmin.postUpload());

module.exports = router;
