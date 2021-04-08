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
            title: 'Price',
            id: 'price',
            value: '',
        },
    ]

    const categories = [
        {
            title: 'iPhone',
            id: 'iphone'
        },
        {
            title: 'Mac',
            id: 'mac'
        },
        {
            title: 'iPad',
            id: 'ipad'
        },
    ]

    const isActive = [
        {
            title: 'Yes',
            id: 'true',
            value: true
        },
        {
            title: 'No',
            id: 'false',
            value: false
        }
    ]

    return {
        createInputs,
        categories,
        isActive
    }
}

export default getInputs