<template>
  <div>
    <div
      class="empl-card"
      @click="handleClick(data), toggleMenu()"
      :style="{ marginLeft: depth * 20 + 'px' }"
    >
      <div class="avatar">
        <img :src="data.profile_pic" alt="avatar" />
      </div>
      <div class="flex-box">
        <div class="detail">
          <p class="first-line">{{ data.first_name }}</p>
          <p class="second-line">{{ data.email }}</p>
        </div>
        <div class="sub-count">
          <p v-if="subCount">{{ `(${subCount})` }}</p>
        </div>
      </div>
    </div>
    <div class="items-container" v-show="showChildren">
      <Employee
        v-for="(item, index) in subs"
        :data="item"
        :key="item.id"
        :subCount="item.subordinates && item.subordinates.length"
        :subs="item.subordinates"
        :depth="depth + 1"
        v-bind="$attrs"
        :handleClick="handleClick"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'employee',
  data() {
    return {
      showChildren: false
    }
  },

  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    subCount: {
      type: Number,
      default: 0
    },
    subs: {
      type: Array,
      default: () => []
    },
    depth: {
      type: Number,
      default: 0
    },
    handleClick: {
      type: Function
    }
  },
  emits: ['clickHandler'],
  methods: {
    toggleMenu() {
      this.showChildren = !this.showChildren
    }
  }
}
</script>
<style scoped>
.flex-box {
  display: flex;
  width: 100%;
  align-items: center;
}
.empl-card {
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  cursor: pointer;
}
.empl-card:hover {
  background-color: #d4d5d6;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.detail {
  margin-left: 10px;
  font-size: 14px;
}
.sub-count {
  margin-left: auto;
}
</style>
