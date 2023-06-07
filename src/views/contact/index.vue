<template>
  <div class="contactus">
    <div class="contactus_header">
      <img src="@/assets/contact/banner.png" alt="">
    </div>

    <Title :title-arry="['联系我们','Contact Us']" />

    <div class="contactus_mid">
      <div v-for="item in companys" :key="item.id" class="mid_list">
        <div class="mid_left">
          <h2>{{ item.title }}</h2>
          <div class="left_text">
            <p><img src="@/assets/contact/call@2x.png"><span>{{ item.tel }}</span></p>
            <p><img src="@/assets/contact/email_2@2x.png"><span>{{ item.email }}</span></p>
            <p><img src="@/assets/contact/address@2x.png"><span>{{ item.address }}</span></p>
          </div>
        </div>
        <div>
          <baidu-map
            class="mid_right"
            ak="K6RuD91GxkoGBmrR3KH3sAH3eLRIFO10"
            :center="item.center"
            :zoom="item.zoom"
            :scroll-wheel-zoom="true"
            map-type="BMAP_NORMAL_MAP"
            :max-zoom="item.maxZoom"
            :min-zoom="item.minZoom"
          >
            <bm-marker :position="item.position" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" />
          </baidu-map>
        </div>
      </div>

    </div>

    <Title :title-arry="['在线留言','Online Message']" />

    <div class="contactus_bot-container">
      <div class="contactus_bot">
        <div class="bot_top">
          <el-form ref="dataform" :model="dataForm" :rules="dataRules">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="姓名" prop="personname">
                  <div class="content">
                    <img src="@/assets/contact/Frame@2x.png" alt="">
                    <el-input v-model="dataForm.personname" size="medium" placeholder="请留下您的姓名" />
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <div class="content">
                  <el-form-item label="电话" prop="phone">
                    <img src="@/assets/contact/Frame_1@2x.png" alt="">
                    <el-input v-model="dataForm.phone" placeholder="18501111111" />
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="content">
                  <el-form-item label="邮箱" prop="dataFormMid">
                    <img src="@/assets/contact/email_2@2x.png" alt="">
                    <el-input v-model="dataForm.dataFormMid" placeholder="请留下您的邮箱" />
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <div class="content">
              <el-form-item label="意见反馈" prop="feedbackcontent">
                <img class="remark" src="@/assets/contact/Frame_2@2x.png" alt="">
                <el-input v-model="dataForm.feedbackcontent" type="textarea" :rows="10" placeholder="请输入您想说的..." />
              </el-form-item>
            </div>
          </el-form>
          <p>{{ notice }}</p>
          <div class="bot_btn" @click="handleSubmit">立即提交</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Title from '@/components/title'

import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

import { phone } from '@/utils/validate'

import { addFeedBack } from '@/api/contact'

export default {
  components: { Title, BaiduMap },
  data() {
    const validetePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('联系电话不能为空'))
      } else {
        if (phone(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的手机号'))
        }
      }
    }
    return {
      companys: [
        { id: 1, title: '北京扬铭科技发展有限责任公司',
          address: '北京市海淀区安宁庄东路2号楼710',
          email: '15936299999@163.com',
          tel: '010-88888888',
          center: { lng: 116.331924, lat: 40.05695 }, // 中心位
          position: { lng: 116.331727, lat: 40.056954 }, // 位置点
          zoom: 100,
          maxZoom: 80,
          minZoom: 10

        },
        { id: 2, title: '北京扬铭科技发展有限责任公司无锡分公司',
          address: '无锡市滨湖区绣溪路58-9号二层202',
          email: '15936299999@163.com',
          tel: '010-88888888',
          center: { lng: 120.276926, lat: 31.478934 },
          position: { lng: 120.276361, lat: 31.47895 }, // 位置点
          zoom: 100,
          maxZoom: 80,
          minZoom: 10

        }
      ],
      map: null,
      dataForm: {
        personname: '',
        phone: '',
        mail: '',
        feedbackcontent: ''
      },
      dataFormMid: {
        personname: '',
        phone: '',
        mail: '',
        feedbackcontent: ''
      },
      notice: '请填写以上信息，我们将尽快安排专业人员与您沟通，帮助您快速制定解决方案。',
      dataRules: {
        personname: [{ required: true, trigger: 'blur', message: '姓名不能为空' }],
        phone: [{ validator: validetePhone, required: true, trigger: 'blur' }],
        feedbackcontent: [{ required: true, trigger: 'blur', message: '意见反馈内容不能为空' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.dataform.validate((valid) => {
        if (valid) {
          const bean = { ...this.dataForm }
          addFeedBack(JSON.stringify(bean)).then(res => {
            if (res.code === 200) {
              this.$message.success('您的反馈我们已收到，将尽快安排专业人员与您联系！')
              this.dataForm = { ...this.dataFormMid }
              this.$refs.dataform.clearValidate()
            }
          })
        }
      })
    }
  }
}
</script>

