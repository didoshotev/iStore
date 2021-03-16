import React from 'react'
import FirstHomeSection from '../../components/first-home-section/first-home-section'
import PageLayout from '../../components/page-layout/page-layout'
import SecondHomeSection from '../../components/second-home-section/second-home-section'

const HomePage = () => {

    return (
       <PageLayout>
           <FirstHomeSection />
           <SecondHomeSection />
       </PageLayout>
    
    )
    }


export default HomePage