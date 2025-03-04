<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";

interface IProps {
  isTriggered?: boolean;
  isSendFirstRequest?: boolean;
}

const props = defineProps<IProps>();
const emit = defineEmits(["onLoad"]);

const isFetching = ref(false);
const loadTrigger = ref<HTMLElement | null>(null);

const loadMore = async () => {
  if (isFetching.value) return;
  isFetching.value = true;
  emit("onLoad");
  isFetching.value = false;
};

let observer: IntersectionObserver | null = null;

const setupObserver = async () => {
  if (observer) observer.disconnect();
  if (!props.isTriggered) return;

  await nextTick();

  if (!loadTrigger.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    },
    { rootMargin: "100px" }
  );

  observer.observe(loadTrigger.value);
};

watch(
  () => props.isTriggered,
  async (newValue) => {
    if (newValue) {
      await setupObserver();
    } else if (props.isSendFirstRequest) {
      loadMore();
    }
  }
);

onMounted(async () => {
  if (props.isTriggered) {
    await setupObserver();
  } else if (props.isSendFirstRequest) {
    loadMore();
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div>
    <slot />
    <div ref="loadTrigger" class="loading" v-show="props.isTriggered">
      {{ isFetching ? "Загрузка..." : "" }}
    </div>
  </div>
</template>

<style scoped>
.loading {
  text-align: center;
  font-size: 18px;
  width: 100%;
  color: gray;
}
</style>
