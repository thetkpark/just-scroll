import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Home.module.css"
import getLongText from "../utils/text"

export default function Home() {
	const [text, setText] = useState(getLongText(20))

	const moreText = () => {
		const moreText = text + getLongText(10)
		setText(moreText)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Just Scroll</title>
				<meta name="description" content="Just for scrolling" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.main}>
				<h1 className={styles.headerText}>
					Did you just bought MX Master 3 with MagSpeed™ Electromagnetic
					scrolling and want to try? GO FOR IT!!
				</h1>
				<div className={styles.scrollText}>{text}</div>
				<button className="ui red basic button" onClick={moreText}>
					GIVE ME MORE!!
				</button>
			</div>
		</div>
	)
}
