import React from 'react'
import FirstHomeSection from '../../components/home/first-home-section/first-home-section'
import PageLayout from '../../components/global/page-layout/page-layout'
import SecondHomeSection from '../../components/home/second-home-section/second-home-section'

const HomePage = () => {

    return (
        <PageLayout>
            <FirstHomeSection />
            <SecondHomeSection />
        </PageLayout>

    )
}

export default HomePage