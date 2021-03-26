import mcb from '../images/mcb.png'
import mcbPro from '../images/mcb-pro.png'
import ipad from '../images/ipad.png'


const getSpecialOffers = () => {
    
    // get all product id's from DB here
    const offerts = [
        {
            title: 'iPad Air',
            info: 'Buy now for $39.32/mo or $1200 cash in',
            type: 'big',
            imgUrl: `${ipad}`,
            category: 'ipad'
            // linkUrl: `/ipad/air-${id}`
        },
        {
            title: 'MacBook Pro 13',
            info: 'Buy now for $79.32/mo or $2000 before trade in',
            type: 'small',
            imgUrl: `${mcbPro}`,
            category: 'mac'

        },
        {
            title: 'MacBook Air',
            info: 'Buy now for $69.32/mo or $1500 before trade in',
            type: 'small',
            imgUrl: `${mcb}`,
            category: 'mac'
        },
    ]

    return offerts
}

export default getSpecialOffers