<script>
import StyleMap from './stylesheet/StyleMap.svelte';

import Header from './components/Header.svelte';
import Footer from './components/Footer.svelte';

import AboutMe from './components/AboutMe/AboutMe.svelte';
import AssetsPage from './components/Assets/Assets.svelte';

export let url = "";

</script>


<div>
    <Header/>
    <AboutMe/>
    <AssetsPage/>
    <Footer/>
</div>  

