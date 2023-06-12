const router = require("express").Router()

const {
    getAllData,
    createData,
    updateData,
    deleteData
} = require("../controller/SiswaController")

//route
router.get('/siswa',getAllData);
router.post('/siswa',createData);
router.put('/siswa/:id',updateData);
router.delete('/siswa/:id',deleteData);

module.exports = router