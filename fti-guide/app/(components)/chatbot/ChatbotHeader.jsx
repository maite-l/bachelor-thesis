import styles from './ChatbotHeader.module.css'

export default function ChatbotHeader({ data, slug }) {

    return (
        <div className={styles.chatbotHeader}>
            <div className={styles.characterContainer}>
                <img className={styles.character} src={`/images/chatheader/${slug}.gif`} alt={data.name} />
            </div>
            <div className={styles.chatbotHeaderInfo}>
                <h1 className={styles.chatbotName}>{data.name}</h1>
                {data.quote && (
                    <p className={styles.chatbotQuote}>{data.quote}</p>
                )}
                {data.tags && (
                    <div className={styles.tags}>
                        <div className={styles.tag}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                                <path d="M22.3725 14.4663C22.3751 14.4777 22.3777 14.4889 22.3802 14.5H14.4809C9.55233 14.5 6.98306 13.1374 5.37734 11.2238C4.56081 10.2507 3.97143 9.10958 3.45615 7.86462C3.15031 7.12569 2.88302 6.38433 2.60913 5.62469C2.41185 5.0775 2.21114 4.52082 1.99014 3.94872C1.99013 3.9487 1.99012 3.94869 1.99012 3.94867L1.75614 3.34275L0.715485 0.5H14.0819C15.3384 0.5 16.5086 1.29461 17.5858 2.65424C18.6559 4.00493 19.5639 5.82823 20.3005 7.68442C21.0348 9.53495 21.5877 11.3896 21.9573 12.7843C22.142 13.4809 22.2804 14.0611 22.3725 14.4663Z" fill="#F27361" stroke="#6E33D5" />
                            </svg>
                            <p>{data.tags.event}</p>
                        </div>
                        <div className={styles.tag}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                                <path d="M1.0076 9.63277C0.783724 15.0377 5.55116 19.1743 9.64372 23.399C14.1839 18.7199 18.6167 14.9259 18.7275 9.63277C18.8126 5.56542 15.2609 0.999937 9.64372 1C4.24909 1.00006 1.17569 5.57438 1.0076 9.63277Z" fill="#F27361" stroke="#6E33D5" />
                                <circle cx="9.79741" cy="9.7885" r="3.38872" fill="#FBF3ED" stroke="#6E33D5" />
                            </svg>
                            <p>{data.tags.location}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}