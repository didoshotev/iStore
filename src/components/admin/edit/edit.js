import { Component } from "react";
import AuthTitle from "../../auth-title/auth-title";
import FormLayout from "../../form-layout/form-layout";
import PageLayout from "../../page-layout/page-layout";
import getInputs from '../../../utils/inputs'
import FormGroup from "../../form-group/form-group";
import apiCall from "../../../utils/apiCall";
import UploadImg from "../upload-img/upload-img";


class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: { ...this.props.location.state.data },
            inputs: getInputs().createInputs,
            imgUrl: this.props.location.state.data.imageUrl || ''
        }
    }

    createUI() {
        return this.state.inputs.map((inputObj, index) => {
            return (
                <FormGroup
                    key={index}
                    title={inputObj.title}
                    htmlFor={inputObj.id}
                    id={inputObj.id}
                    value={inputObj.value}
                    onChange={(e) => this.handleChange(e, index)}
                />
            )
        }
        )
    }


    handleChange = (e, index) => {
        const newState = this.state.inputs[index]
        newState.value = e.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = this.state.inputs.map(a => a.value)
        let [title, description, deviceType, price, isActive] = [...res]
        const imageUrl = this.state.imgUrl

        await apiCall(
            `http://localhost:5000/api/products/${this.state.product.id}`,
            {
                title, description, deviceType, imageUrl, price, isActive
            },
            'PUT',
            (product) => {
                console.log('Product successfully edited!')
                console.log(product);
                this.props.history.push('/')
            },
            (err) => {
                console.log('ERROR in editing product', err);
            }
        )
    }

    handleImg = (imgUrl) => {
        this.setState({
            imgUrl
        })
    }

    render() {

        return (
            <PageLayout>
                <AuthTitle content={`Editing ${this.state.product.title}`} />
                <FormLayout label={'Product Information'} onSubmit={this.handleSubmit}>
                    <UploadImg onGetImg={this.handleImg} />
                    {this.createUI()}
                </FormLayout>
            </PageLayout>
        )
    }
}

export default Edit