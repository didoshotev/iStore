import styles from './item-row.module.css'

const ItemRow = ({ product }) => {

    return (
        <section className={styles.container}>
            <div className={styles['img-wrapper']}>
                <img src={product.imageUrl} alt="" />
            </div>
            <div className={styles['col']}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className={styles['col']}>
                <h3>${product.price}.00</h3>
            </div>
        </section>
    )
}

export default ItemRow