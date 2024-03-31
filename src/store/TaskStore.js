import { defineStore } from "pinia";

export const useAboutData = defineStore('taskStore', {
    state: () => ({
        aboutData: {}
    }),
    actions: {
        async getaboutData() {
            try {
                const res = await fetch('http://localhost:3000/homedata');
                const data = await res.json();
                this.aboutData = data;
                console.log(data,'this is my data');
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        }
    }
});
