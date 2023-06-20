import { PostType } from "../interfaces/IPostType";

export const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ptdavid0.png',
      name: 'Pedro Pereira',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'ptdavid.design/doctorcare' }
    ],
    publishedAt: new Date('2023-06-14 14:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/aninhabort.png',
      name: 'Ana Carolina B. de Magalhães',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'aninhabort.design/doctorcare' }
    ],
    publishedAt: new Date('2023-06-16 14:42:01')
  }
]