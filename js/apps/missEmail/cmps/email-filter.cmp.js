export default {
    template: `

        <div class="email-list-header flex space-between align-center">
                    <p class="email-list-header-title">messages</p>
                    <input class="search-input" type="search" name="" id="" placeholder="Search emails" v-model="filterBy.txt" @input="emitFilter">
                    <div class="email-list-filter flex">
                        <button @click="all" class="filter-btn" :class="allFilterActive">all</button>
                        <button @click="toggleUnreadFilter" class="filter-btn" :class="unreadFilterActive">unread</button>
                        <button @click="toggleReadFilter" class="filter-btn" :class="readFilterActive">read</button>
                        <button @click="toggleFavoriteFilter" class="filter-btn" :class="favoriteFilterActive">important</button>
                    </div>
        </div>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                read: false,
                unread: false,
                favorite: false,
                all: true
            }
        }
    },

    computed: {
        readFilterActive() {
            return this.filterBy.read ? 'filter-btn-active' : '';
        },
        favoriteFilterActive() {
            return this.filterBy.favorite ? 'filter-btn-active' : '';
        },
        unreadFilterActive() {
            return this.filterBy.unread ? 'filter-btn-active' : '';
        },
        allFilterActive() {
            return this.filterBy.all ? 'filter-btn-active' : '';
        },
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        },
        toggleReadFilter() {
            this.filterBy.read = !this.filterBy.read;
            this.filterBy.unread = false;
            this.filterBy.all = false;
            this.emitFilter();
        },
        toggleUnreadFilter() {
            this.filterBy.unread = !this.filterBy.unread;
            this.filterBy.read = false;
            this.filterBy.all = false;
            this.emitFilter();
        },
        toggleFavoriteFilter() {
            this.filterBy.favorite = !this.filterBy.favorite;
            this.emitFilter();
        },
        toggleByAllFilter() {
            this.filterBy.all = !this.filterBy.all;
            this.emitFilter();
        },
        all() {
            this.filterBy.all = true;
            this.filterBy.read = false;
            this.filterBy.unread = false;
            this.filterBy.favorite = false;
            this.emitFilter();
        }
    }
}
