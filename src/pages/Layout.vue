<template>
  <div class="main-layout">
    <main>
      <div class="header">
        <p><b>EMPLOYEES</b></p>
      </div>
      <div class="employee-list">
        <EmployeeList @showDetails="displayDetails" />
      </div>
    </main>
    <section>
      <EmployeeDetails :id="emplId" />
    </section>
  </div>
</template>
<script>
import EmployeeList from '../views/EmployeeList.vue'
import EmployeeDetails from '../views/EmploeeDetails.vue'
export default {
  data() {
    return {
      emplId: 0
    }
  },

  components: {
    EmployeeList,
    EmployeeDetails
  },
  methods: {
    displayDetails(id) {
      this.emplId = id
      this.$forceUpdate()
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
.main-layout {
  display: flex;
  padding: 10px 5px;
  color: #49494a;
  font-family: 'Ubuntu', sans-serif;
}

main {
  width: 35%;
  border-radius: 10px;
  margin-right: 10px;
  background-color: #f0f2f2;
  padding: 20px 10px;
  height: 85vh;
  overflow: auto;
}

section {
  width: 65%;
  border-radius: 10px;
  background-color: #f0f2f2;
  height: 85vh;
}

.header {
  margin-bottom: 10px;
}
</style>
