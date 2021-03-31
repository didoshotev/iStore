import { Component } from "react";
import AuthTitle from "../../auth-title/auth-title";
import FormLayout from "../../form-layout/form-layout";
import PageLayout from "../../page-layout/page-layout";
import getInputs from '../../../utils/inputs'
import FormGroup from "../../form-group/form-group";
import apiCall from "../../../utils/apiCall";


class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: { ...this.props.location.state.data },
            inputs: getInputs().createInputs,
        }
    }

    createUI() {
        // console.log(this.state.product);
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
        let [title, description, deviceType, imageUrl, price, isActive] = [...res]   

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



    render() {

        return (
            <PageLayout>
                <AuthTitle content={`Editing ${this.state.product.title}`} />
                <FormLayout label={'Product Information'} onSubmit={this.handleSubmit}>
                    {this.createUI()}
                </FormLayout>
            </PageLayout>
        )
    }
}

export default Edit