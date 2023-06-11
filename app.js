const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/siswa', async (req, res) => {
    try {
        const siswa = await prisma.siswa.findMany();
        if (siswa.length === 0) {
            res.status(204).send({ message: 'Data siswa kosong' });
        } else {
            res.json(siswa);
        }
    } catch (err) {
        res.status(500).json({ message: 'Gagal mendapatkan data siswa: ' + err.message });
    }
});


app.post('/siswa', async (req, res) => {
    try {
        const { nama, kelas } = req.body;
        const result = await prisma.siswa.create({
            data: {
                nama: nama,
                kelas: kelas,
                tanggal_lahir: tanggal_lahir,
                ekstrakurikuler : ekstrakurikuler
            }
        });
        res.json({
            message: 'Data siswa berhasil dibuat',
            result: result
        });
    } catch (err) {
        res.status(500).json({ message: 'Gagal membuat data siswa: ' + err.message });
    }
});


app.put('/siswa/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, kelas } = req.body;
        const updatedSiswa = await prisma.siswa.update({
            where: { id: Number(id) },
            data: { nama, kelas, tanggal_lahir, ekstrakurikuler }
        });
        res.json({
            message: 'Data berhasil diubah',
            result: updatedSiswa
        });
    } catch (err) {
        res.status(500).json({ message: 'Gagal memperbarui data siswa: ' + err.message });
    }
});

app.delete('/siswa/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const siswa = await prisma.siswa.delete({
            where: { id: Number(id) }
        });
        res.json({
            message: 'Data berhasil dihapus',
            result: siswa
        });
    } catch (err) {
        res.status(500).json({ message: 'Gagal menghapus data siswa: ' + err.message });
    }
});


app.listen(3001 || process.env.PORT, ()=>
    console.log(`Server ready at: http://localhost:3001`)
)