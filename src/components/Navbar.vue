<template>
    <nav>
        <v-toolbar>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>CHANHYEOK KANG</v-toolbar-title>
   
            <v-spacer></v-spacer>

            <v-btn :href="`https://github.com/chanhyeokkang`" target="_blank">
                <span>GitHub</span>
                <v-icon>mdi-github</v-icon>
            </v-btn>

        </v-toolbar>

        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
            <v-layout column align-center>
                <v-flex class="mt-4">
                    <v-avatar size="100">
                        <img src="img/selfie.png">
                    </v-avatar>
                    <p class="white--gray subheading mt-3">
                        KANG CHANHYEOK
                    </p>
                </v-flex>
            </v-layout>

            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="light-blue--text text--darken-4">
                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.router">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data : () => ({
        drawer : false,
        group : null,
        items : [
            {icon:'mdi-domain', text: 'Dashboard', router: '/'},
            {icon:'mdi-inbox', text: 'My Project', router: '/MyProject'},
            {icon:'mdi-school', text: 'Education', router: '/Education'},
            {icon:'mdi-phone', text: 'Contact Me', router: '/ContactMe'}
        ]
    })
}
</script>