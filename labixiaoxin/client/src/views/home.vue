<template>
    <div>
        <p v-for="(i, k) in list" :key="k">
            {{ i.title }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    async mounted() {
        let result = await this.$axios('get', '/list');
        this.list = result.data.data;
        if (result.data.code === 3) {
            this.$toast.fail({
                message: result.data.msg,
                onClose: () => {
                    this.$router.push('/user');
                },
            });
        }
    },
};
</script>

<style></style>
