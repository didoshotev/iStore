import styles from './item-row.module.css'
import FontAwIcon from '../../font-awesome-icon/fontAwesomeIcon'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


const ItemRow = ({ product, onClick }) => {
    return (
        <li className={styles.container}>
            <section className={styles.gridItem}>
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
                <div className={styles['col']}>
                        <FontAwIcon icon={faTimesCircle} size={'lg'} color={'rgb(226, 25, 55)'} onClick={onClick}/>
                </div>
            </section>
        </li>
    )
}

export default ItemRow