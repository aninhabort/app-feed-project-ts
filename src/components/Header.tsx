import igniteLogo from '../assets/ignite-logo.svg'

import styles from './style/Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo do ignite" />
    </header>
  )
}