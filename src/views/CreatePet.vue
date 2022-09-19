<template>
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent="onSubmit">
    <el-form-item label="宠物名字">
        <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="宠物种类">
        <el-select v-model="form.breed" placeholder="请选择活动区域">
        <el-option label="小狗" value="dog"></el-option>
        <el-option label="小猫" value="cat"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="出生日期">
        <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
    </el-form-item>
    <el-form-item label="是否预定">
        <el-switch v-model="form.reserve"></el-switch>
    </el-form-item>
    <el-form-item label="宠物喜好">
        <el-checkbox-group v-model="form.hobby">
        <el-checkbox label="鲜肉" name="type"></el-checkbox>
        <el-checkbox label="蔬菜瓜果" name="type"></el-checkbox>
        <el-checkbox label="飞盘等巡回游戏" name="type"></el-checkbox>
        <el-checkbox label="嗅闻、探寻" name="type"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <el-form-item label="先天条件">
        <el-radio-group v-model="form.health">
        <el-radio label="存在先天缺陷"></el-radio>
        <el-radio label="暂时未发现先天缺陷"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="宠物描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>

</template>
<script>
export default {
    name: 'PetCreate',
    data() {
      return {
        form: {
          name: '',
          breed: '',
          date: '',
          reserve: false,
          hobby: [],
          health: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form)
      }
    }
}
</script>
