<template>
    <div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/id">id</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/test">test</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/mads">Whatsup</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about/history">History</NuxtLink>
                </li>
            </ul>
        </nav>
        <NuxtPage />


        <div>
            <slot />
        </div>


    </div>
</template>

<style lang="scss">
nav {
    display: flex;
    background: #eee;
    padding: 20px;

    ul {
        display: flex;
        gap: 20px;

        li {
            list-style: none;
        }
    }
}
</style>