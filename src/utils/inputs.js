const getInputs = () => {

    const createInputs = [
        {
            title: 'Title',
            id: 'title',
            value: '',
        },
        {
            title: 'Description',
            id: 'description',
            value: '',

        },
        {
            title: 'Category',
            id: 'deviceType',
            value: '',

        },
        {
            title: 'Price',
            id: 'price',
            value: '',
        },
        {
            title: 'Is the product active?',
            id: 'isActive',
            value: '',
        },
    ]

    return {
        createInputs
    }
}

export default getInputs