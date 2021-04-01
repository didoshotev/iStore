import Button from '../../button/button'
import styles from './cart-summary.module.css'

const CartSummary = () => {

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Cart</h3>
            <div className={styles['row-wrapper']}>
                <ul className={styles['list']}>
                    <li className={styles['list-item']}>
                        <span>Products Price</span>
                        <span>$2999.00</span>
                    </li>
                    <li className={styles['list-item']}>
                        <p>Shipping</p>
                        <p>FREE</p>
                    </li>
                    <li className={styles['list-item']}>
                        <p className={styles['list-item--special']}>Subtotal</p>
                        <p className={styles['list-item--special']}>$2999.00</p>
                    </li>
                    <li className={styles['btn-item']}>
                        <Button content={'Buy'} fullWidth/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CartSummary