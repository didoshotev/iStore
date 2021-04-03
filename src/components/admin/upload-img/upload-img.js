import Button from '../../button/button'
import styles from './upload-img.module.css'

const UploadImg = (props) => {

    const initWidget = () => {
        const widget = window.cloudinary.createUploadWidget({
            cloudName: "notdeffect",
            uploadPreset: "istore",
        }, (error, result) => {
            if(result.event === 'success') {
                props.onGetImg(result.info.url)
            }
        })
        widget.open()
    }
    return (
        <div className={styles.container}>
            <Button content={'Upload Image'} onClick={initWidget} type={'button'}/>
        </div>
    )
}

export default UploadImg