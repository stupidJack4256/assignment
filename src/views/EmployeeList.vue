<template>
  <div v-for="empl in employeeData" :key="empl.id" class="empl-card">
    <Employee
      :subCount="empl.subordinates && empl.subordinates.length"
      :data="empl"
      :subs="empl.subordinates"
      :handleClick="handleClick"
    />
  </div>
</template>
<script>
import Employee from '../components/Employee.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'employee-list',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['employeeData'])
  },
  watch: {
    employeeData(newVal) {
      this.employeeData = newVal.map((e) => {
        return { ...e, subordinates: this.getChildrenElms(e) }
      })
    }
  },
  components: {
    Employee
  },
  emits: ['showDetails'],
  mounted() {
    this.employeeData = this.employeeData.map((e) => {
      return { ...e, subordinates: this.getChildrenElms(e) }
    })
  },
  methods: {
    getSubCount(id) {
      return this.employeeData.filter((e) => e.manager_id === id).length
    },
    getChildren(id) {
      return this.employeeData.filter((e) => e.manager_id === id)
    },
    handleClick(node) {
      this.$emit('showDetails', node.id)
    },
    getSubsById(managerId) {
      let subs = []
      for (const em of this.employeeData) {
        if (em.manager_id == managerId) subs.push(em)
      }
      return subs
    },
    getChildrenElms(root) {
      let employee = root
      let subs = this.getSubsById(employee.id)
      employee.subordinates = subs
      if (subs.length == 0) return
      for (const em of subs) this.getChildrenElms(em)
    }
  }
}
</script>
<style scoped>
.empl-card {
  margin-bottom: 5px;
}
</style>
