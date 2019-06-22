export default {
    template: `<header class="dynamic-header flex align-center space-between">
                <div class="flex align-center">
                    <div class="logo">appsus</div>
                    <!-- <div class="search">
                        <input class="search-input" type="search" name="" id="" placeholder="Search emails">
                    </div> -->
                </div>
                <nav class="appsus-nav">
                    <ul class="nav-bar clean-list flex">
                        <li><router-link exact to="/">home</router-link></li>
                        <li><router-link to="/mail">mail</router-link></li>
                        <li><router-link to="/keep">keep</router-link></li>
                        <li><router-link to="/books">books</router-link></li>
                        <li><router-link to="/about">about</router-link></li>
                    </ul>
                </nav>
            </header>`
}