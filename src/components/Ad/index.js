import React, {useEffect} from 'react';
import { View, Text, Button, Dimensions, Alert } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
  } from 'expo-ads-admob';
import { SafeAreaView } from 'react-native-safe-area-context';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default function AdComponent () {

    async function InterstitialAd(){
        await AdMobInterstitial.setAdUnitID('ca-app-pub-2435341491236531/5165337823');
        await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true})
        await AdMobInterstitial.showAdAsync();
    }


    return(
        <SafeAreaView style={{alignItems:'center', width: width}}>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-4060598734626909/3694002739" 
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={ (error) => console.log(error)} />
                <View style={{top: height / 1.15}}>
                    <AdMobBanner
                        bannerSize="fullBanner"
                        adUnitID="ca-app-pub-4060598734626909/3694002739" 
                        servePersonalizedAds // true or false
                        onDidFailToReceiveAdWithError={ (error) => console.log(error)} />
                </View>
            <Button title='Mostrar anuncio ' onPress={() => InterstitialAd()}/>
        </SafeAreaView>
    )
}