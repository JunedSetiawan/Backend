const prisma = require("../src/connection")

const siswaData = [
  {
    nama: 'Alice',
    kelas: 'X',
    tanggal_lahir: new Date("2003-04-15").toISOString(),
    jurusan : "RPL" 
  },
  {
    nama: 'Joe',
    kelas: 'XI',
    tanggal_lahir: new Date("2003-05-11").toISOString(),
    jurusan : "OI"
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