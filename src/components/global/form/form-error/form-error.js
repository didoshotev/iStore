import styles from './form-error.module.css'

const FormError = ({ errorMessage }) => {

    return (
        <div id={'form-error'} className={styles['error-container']}>
            <span className={styles.error}>{errorMessage}</span>
        </div>
    )
}

export default FormError