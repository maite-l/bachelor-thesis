import styles from './ChatbotHeader.module.css'

export default function ChatbotHeader({ data }) {


    console.log(data);

    return (
        <div className={styles.chatbotHeader}>
            <div></div>
            <div className={styles.chatbotHeaderInfo}>
                <h1 className={styles.chatbotName}>{data.name}</h1>
                <p className={styles.chatbotQuote}>{data.quote}</p>
            </div>
        </div>
    )
}