const { Router } = require('express');
const upload = require('../middlewares/upload.mw');
const GroupController = require('../controllers/group.controller');

const groupRouter = Router();

// http://localhost:3000/api/groups
groupRouter.post('/', upload.single('imageGroup'), GroupController.createGroup);
// http://localhost:3000/api/groups/users/7
groupRouter.get('/users/:idUser', GroupController.getUserGroups);
// http://localhost:3000/api/groups/2
groupRouter.patch('/:idGroup', GroupController.addUserAtGroup);
// http://localhost:3000/api/groups/2/users HTTP/1.1
groupRouter.get('/:idGroup/users', GroupController.getUsersInGroup);
// http://localhost:3000/api/groups/2/image
groupRouter.patch('/:idGroup/image', upload.single('imageGroup'), GroupController.addImage);

module.exports = groupRouter;
