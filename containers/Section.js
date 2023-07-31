import styles from '@/styles/Section.module.css'
import Link from 'next/link'
import Container from './Container'

const Section = ({title, link, LinkText, children}) => {
    return (
        <section className={styles.section}>
            <Container>
            <div className={styles.header}>
                <h2>{title}</h2>
                <Link href={link}>{LinkText}</Link>
            </div>
            <div className={styles.body}>{children}</div>
            </Container>
        </section>
    )
}

export default Section