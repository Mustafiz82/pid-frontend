import BannerPlugg from '@/components/pages/plugg/BannerPlugg';
import FeatureBanner from '@/components/pages/plugg/FeatureBanner';
import Features from '@/components/pages/plugg/Features';
import PetAdoptionHero from '@/components/pages/plugg/PetAdoptionHero';
import Quality from '@/components/pages/plugg/Quality';
import React from 'react';

const page = () => {
    return (
        <>
            <BannerPlugg />
            <Quality />
            <Features/>
            <FeatureBanner/>
            <PetAdoptionHero/>
        </>

    );
};

export default page;
