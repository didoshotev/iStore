import { Component } from "react";
import AuthTitle from "../../auth-title/auth-title";
import FormLayout from "../../form-layout/form-layout";
import PageLayout from "../../page-layout/page-layout";
import getInputs from '../../../utils/inputs'
import FormGroup from "../../form-group/form-group";


class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {...this.props.location.state.data},
            inputs: getInputs().createInputs,
        }
    }

    createUI() {
        return this.state.inputs.map((inputObj, index) =>
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

    handleChange = (e, index) => {
        const newState = this.state.inputs[index]
        newState.value = e.target.value
        this.setState( newState )
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        // this.state.inputs
    }
    


    render() {
        return (
            <PageLayout>
                <AuthTitle content={`Editing ${this.state.product.title}`}/>
                <FormLayout label={'Editing Product'} onSubmit={this.handleSubmit}>
                  { this.createUI() }
                </FormLayout>
            </PageLayout>
        )
    }
}

export default Edit