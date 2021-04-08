import styles from '../form-group/form-group.module.css'

const Select = (props) => {

    return (
        <div className={styles['form-group']}>
             <label htmlFor="isActive">{ props.title }</label>
            <select id={props.id} value={props.value} onChange={props.onChange}>
                { props.children }
            </select>
        </div>
    )
}

export default Select