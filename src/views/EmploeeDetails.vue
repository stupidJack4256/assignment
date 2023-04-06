<template>
  <div>
    <div class="no-data" v-if="showText">
      <no-data :displayText="text"></no-data>
    </div>
    <div class="detail-view" v-else>
      <div class="top-content">
        <div class="avatar">
          <img :src="currentEmpl.profile_pic" />
        </div>
        <div class="right-content">
          <div class="mb-1">
            <label for="exampleInputPassword1" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              v-model="currentEmpl.first_name"
            />
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="currentEmpl.username"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="currentEmpl.email"
            />
          </div>
        </div>
      </div>
      <div class="bottom-content">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Address</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model="currentEmpl.street_address"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="currentEmpl.bio"
          ></textarea>
        </div>
      </div>
      <footer>
        <div class="left-content">
          <button class="btn btn-primary" @click="updateEmployeeData(currentEmpl.id)">Edit</button>
          <button class="btn btn-danger ms-1" @click="deleteEmployee(currentEmpl.id)">
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import NoData from '../components/NoData.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'no-data': NoData
  },
  watch: {
    id(emplId) {
      this.showText = false
      this.currentEmpl = { ...this.employeeData.find((e) => e.id === emplId) }
    }
  },
  computed: {
    ...mapGetters(['employeeData'])
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      text: 'Please click on employee to view details',
      currentEmpl: {},
      showText: true
    }
  },
  mounted() {},
  methods: {
    ...mapActions(['updateData', 'deleteData']),
    updateEmployeeData(id) {
      let updatedData = this.currentEmpl
      this.updateData(updatedData)
      alert('Updated Data successfully')
    },
    deleteEmployee(id) {
      this.deleteData(id)
      this.showText = true
    }
  }
}
</script>
<style scoped>
.no-data {
  width: 100%;
  text-align: center;
  margin-top: 35%;
}
.detail-view {
  margin: 40px 60px;
}
.top-content {
  display: flex;
  align-items: center;
}
.top-content .avatar {
  max-width: 200px;
  max-height: 200px;
}

.top-content .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-content .right-content {
  width: 100%;
  margin-left: 30px;
}
.left-content {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
