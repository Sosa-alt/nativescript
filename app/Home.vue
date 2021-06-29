<template>
    <Page>
        <ActionBar>
            <Label text="Vue Lessons"/>
        </ActionBar>

        <GridLayout>
            <TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
                <TabViewItem title="Lessons">
                    <Lessons />
                </TabViewItem>
                <TabViewItem title="Checkout">
                    <Checkout />
                </TabViewItem>
            </TabView>
            <Lessons />
            <Checkout />
        </GridLayout>
    </Page>
</template>

<script>
import Checkout from './components/Checkout.vue';
import Lessons from './views/Lessons.vue';
  export default {
  components: { Lessons, Checkout },
    computed: {
      message() {
        return "Vue Lessons";
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
