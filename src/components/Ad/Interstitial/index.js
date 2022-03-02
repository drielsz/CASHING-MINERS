import {
    AdMobInterstitial,
  } from 'expo-ads-admob';


export const Interstitial = () => {
    return (
        async function InterstitialAd(){
            await AdMobInterstitial.setAdUnitID('ca-app-pub-2435341491236531/5165337823');
            await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true})
            await AdMobInterstitial.showAdAsync();
        }
    )
}
