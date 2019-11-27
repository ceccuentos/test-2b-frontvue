<template>
    <div class="item-wrapper">
        <div class='table-item'>
            <div class="table-column image-bordered">
                <div class='d-flex h-100 w-100'>
                    <img :src="userInfo.picture.medium" :alt="userInfo.name.first">
                </div>
            </div>
            <div class="table-column">
                <div class='d-flex h-100 w-100'>
                    {{userInfo.name.last}}
                </div>
            </div>
            <div class="table-column">
                <div class='d-flex h-100 w-100'>
                    {{userInfo.name.first}}
                </div>
            </div>
            <div class="table-column">
                <div class='d-flex h-100 w-100'>
                    {{userInfo.login.username}}
                </div>
            </div>
            <div class="table-column">
                <div class='d-flex h-100 w-100'>
                    {{userInfo.phone}}
                </div>
            </div>
            <div class="table-column">
                <div class='d-flex h-100 w-100'>
                    {{userInfo.location.city}}
                </div>
            </div>
            <div class="table-column">
                <div class='d-flex h-100 w-100' v-if='!userInfo.opened' @click="openItem(userInfo.login.md5)">
                    &plus;
                </div>
                <div class='d-flex h-100 w-100' v-else @click="closeItem(userInfo.login.md5)">
                    &minus;
                </div>
            </div>
        </div>
        <div class="more-info" :class="{ active: userInfo.opened }">
            <div class='more-info-name'>
                <span>{{userInfo.name.first}}</span>  <font-awesome-icon :icon="userInfo.gender" />
            </div>
            <div class="d-flex">
                <div class="more-info-text">
                    <div>
                        <div><span class='bold mr-2'>Username</span><span>{{userInfo.login.username}}</span></div>
                        <div><span class='bold mr-2'>Registered</span><span>{{registerDate}}</span></div>
                        <div><span class='bold mr-2'>Email</span><span>{{userInfo.email}}</span></div>
                    </div>
                    <div>
                        <div><span class='bold mr-2'>Address</span><span>{{userInfo.location.street}}</span></div>
                        <div><span class='bold mr-2'>City</span><span>{{userInfo.location.city}}</span></div>
                        <div><span class='bold mr-2'>Zip Code</span><span>{{userInfo.location.postcode}}</span></div>
                    </div>
                    <div>
                        <div><span class='bold mr-2'>Birthday</span><span>{{birthdayDate}}</span></div>
                        <div><span class='bold mr-2'>Phone</span><span>{{userInfo.phone}}</span></div>
                        <div><span class='bold mr-2'>Cell</span><span>{{userInfo.cell}}</span></div>
                    </div>
                </div>
                <div class="more-info-photo image-bordered">
                    <img :src="userInfo.picture.large" :alt="userInfo.name.first">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TableItem',
  props: {
      'userInfo': Object,
      'openSelected': Function,
      'closeSelected': Function
  },
  data: function() {
      return {
          registerDate: String,
          birthdayDate: String
      }
  },
  methods: {
      openItem: function(id) {
          this.openSelected(id);
      },
      closeItem: function(id) {
          this.closeSelected(id);
      },
      formateDate: function() {
          const regDate = new Date(this.userInfo.registered.date);
          const birthDate = new Date(this.userInfo.dob.date);
          this.registerDate = `${regDate.getDate()}/${regDate.getMonth()}/${regDate.getFullYear()}`;
          this.birthdayDate = `${birthDate.getDate()}/${birthDate.getMonth()}/${birthDate.getFullYear()}`;
      }
  },
  beforeMount: function() {
      this.formateDate();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-bordered  img{
    border-radius: 100%;
    border: 5px solid #fff;
}
.table-column:last-child {
    font-size: 5rem;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
}
.d-flex {
    align-items: center;
}
.more-info {
    opacity: 0;
    height: 0;
    transition: all 0.1s ease-in-out;
    padding-left: 10%;
    visibility: hidden;
}
.active {
    opacity: 1 !important;
    height: 300px !important;
    visibility: visible !important;
}
.more-info-name {
    font-size: 42px;
    text-align: start;
    font-weight: 700;
}
.more-info-name > span:first-child {
    margin-right: 0.5rem;
}
.more-info-text {
    flex-grow: 1;
    display: flex;
}

.more-info-text > div {
    width: 33.33%;
    text-align: start;
}
.more-info-photo {
    padding-left: 30px;
    padding-right: 10%;
}
.mr-2 {
    margin-right: 0.5rem;
}
</style>
