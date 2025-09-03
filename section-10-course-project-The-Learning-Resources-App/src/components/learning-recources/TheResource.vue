<template>
    <BaseCard>
        <BaseButton @click="setSelectedTap('Resources')" :mode="storedResButtonMode" >Stored Resources</BaseButton>
        <BaseButton @click="setSelectedTap('AddResource')" :mode="addResButtonMode" >Add Resource</BaseButton>
    </BaseCard>
    <component :is="selectedTab" ></component>
</template>

<script>

import Resources from './Resources.vue'
import AddResource from './Add-Resource.vue'


export default {

    components: {
        Resources,
        AddResource
    },

    data() {
        return {
            selectedTab: 'Resources',
            resources: [
                {
                    id: 1,
                    title: 'Official Vue.js website',
                    description: 'The official website of Vue.js',
                    link: 'https://vuejs.org'
                },
                {
                    id: 2,
                    title: 'Google',
                    description: 'Learn to google',
                    link: 'https://google.com'
                }
            ]
        }
    },

    provide() {
        return {
            resources: this.resources
        }
    },

    computed: {
      storedResButtonMode() {
            return this.selectedTab === 'Resources' ? null : 'flat';    
      },
      addResButtonMode() {
            return this.selectedTab === 'AddResource' ? null : 'flat';    
      },
    },

    methods: {
        setSelectedTap(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>