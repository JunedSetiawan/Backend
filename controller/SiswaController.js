const prisma = require("../src/connection")

const getAllData = async (req, res) => {
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
}

const createData = async (req, res) => {
    try {
        const { nama, kelas, tanggal_lahir,jurusan } = req.body;
        const result = await prisma.siswa.create({
            data: {
                nama: nama,
                kelas: kelas,
                tanggal_lahir: tanggal_lahir,
                jurusan :jurusan
            }
        });
        res.json({
            message: 'Data siswa berhasil dibuat',
            result: result
        });
    } catch (err) {
        res.status(500).json({ message: 'Gagal membuat data siswa: ' + err.message });
    }
}

const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, kelas,tanggal_lahir,jurusan } = req.body;
        const updatedSiswa = await prisma.siswa.update({
            where: { id: Number(id) },
            data: { nama, kelas, tanggal_lahir, jurusan}
        });
        res.json({
            message: 'Data berhasil diubah',
            result: updatedSiswa
        });
    } catch (err) {
        res.status(500).json({ message: 'Gagal memperbarui data siswa: ' + err.message });
    }
}

const deleteData = async (req, res) => {
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
}

module.exports = {
    getAllData,
    createData,
    updateData,
    deleteData
}