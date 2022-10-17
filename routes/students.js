const { Router } = require('express')
const router = Router()

const StudentController = require('../controllers/StudentController')

router.get('/', StudentController.all)
router.get('/:id', StudentController.detail)
router.post('/', StudentController.add)
router.patch('/:id', StudentController.edit)
router.delete('/:id', StudentController.remove)

module.exports = router