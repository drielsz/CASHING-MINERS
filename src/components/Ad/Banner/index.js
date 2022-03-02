import {
    AdMobBanner,
  } from 'expo-ads-admob';

export const Banner = () => {
    return(
       <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4060598734626909/3694002739" 
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={ (error) => console.log(error)} /> 
    )
}



