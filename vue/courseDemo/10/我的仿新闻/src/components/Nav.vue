<template>
    <div class="nav">
        <ul>
            <router-link tag="li" to="/home" active-class="active">
                <a href="javascripts:;">首页</a>
            </router-link>
             <router-link tag="li" to="/follow" active-class="active">
                <a href="javascripts:;">关注</a>
            </router-link>
             <router-link tag="li" to="/column" active-class="active">
                <a href="javascripts:;">栏目</a>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default{

    }
</script>
