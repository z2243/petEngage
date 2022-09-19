<template>
    <div class="listPet">
      <el-table :data="pets">
        <el-table-column prop="name" label="宠物姓名" width="100">
        </el-table-column>
        <el-table-column prop="date" label="出生日期" width="120">
          <template slot-scope="scope">
            {{ scope.row.date | FormateTime }}
          </template>
        </el-table-column>
        <el-table-column prop="breed" label="宠物品种" width="100">
        </el-table-column>
        <el-table-column prop="reserve" label="是否被预定" width="100">
          <template slot-scope="scope">
            {{ scope.row.reserve === true ? '是' : '否' }}
          </template>
        </el-table-column>
        <el-table-column prop="hobby" label="宠物爱好" width="300">
          <template slot-scope="scope">
            <div>
              <el-button type="text" v-for="(hobby, index) in scope.row.hobby" :key="index">
                {{ hobby }} 
              </el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="health" label="先天身体情况">
        </el-table-column>
        <el-table-column prop="desc" label="宠物具体细节">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row._id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
    name: 'ListPet',
    data() {
      return {
        pets: []
      }
    },
    created () {
      this.fetch()
    },
    methods: {
      fetch () {
        this.$http.get('pets').then(res => {
          this.pets = res.data
          console.log(this.pets)
        })
      },
      handleEdit (id) {
        this.$router.push(`/pet/${id}/edit`)
      },
      handleDelete (id) {
        this.$http.delete(`pets/${id}`).then(res => {
          console.log(res.status)
          if (res.status === 200) {
            this.$message({
              message: '消息删除成功！',
              type: 'success'
            })
            this.fetch()
          }
        })
      }
    }
};
</script>
