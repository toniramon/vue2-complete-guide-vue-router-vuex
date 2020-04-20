<template>
    <div class="col-xs-12 col-sm-6">
        <ul>
            <li
                class="list-group-item"
                v-for="index in 5" v-bind:key="index">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>