<template>
    <BaseCard>
        <BaseButton @click="setSelectedTap('Resources')" :mode="storedResButtonMode" >Stored Resources</BaseButton>
        <BaseButton @click="setSelectedTap('AddResource')" :mode="addResButtonMode" >Add Resource</BaseButton>
    </BaseCard>
    <!-- keep alive cashes data the component contains -->
    <keep-alive>
        <component :is="selectedTab" ></component>
    </keep-alive>
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
            resources: this.resources,
            addResource: this.addResource
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
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            };
        this.resources.unshift(newResource);
        this.selectedTab = 'Resources';
        }
    }
}
</script>