import { Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { posts } from "./data/postsData"

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App;