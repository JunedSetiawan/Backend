const { PrismaClient } = require('@prisma/client')
const dayjs = require('dayjs')
const prisma = new PrismaClient()

const siswaData = [
  {
    nama: 'Alice',
    kelas: '10A',
    ekstrakurikuler: 'voly,Sepak Bola',
    tanggal_lahir : dayjs(2003-04-15).toDate()
  },
  {
    nama: 'Joe',
    kelas: '10B',
    ekstrakurikuler: 'voly,Basket',
    tanggal_lahir : dayjs(2003-05-11).toDate()
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of siswaData) {
    const siswa = await prisma.siswa.create({
      data: u,
    })
    console.log(`Created siswa with id: ${siswa.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })