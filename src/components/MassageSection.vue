<template>
<section  id="massage" class="massage">
    <div class="container">
      <h1 class="massage__title">Выбери свой массаж</h1>
      <div class="massage__choise">
        <ul class="massage__choise-list">
          <li class="massage__choise-item">
            <label class="massage__choise-radio">
              <input v-model="showSelectMassage" value="man" name="worker" type="radio" class="massage__choise-input" checked>
              <div class="massage__choise-visible"></div>
              <div class="massage__choise-title">Мужской массаж</div>
            </label>
          </li>
          <li class="massage__choise-item">
            <label class="massage__choise-radio">
              <input v-model="showSelectMassage" value="wooman" name="worker" type="radio" class="massage__choise-input">
              <div class="massage__choise-visible"></div>
              <div class="massage__choise-title">Женский женский</div>
            </label>
          </li>
        </ul>
      </div>
      <form class="form__massage">
        <massage-list-m v-show="showSelectMassage==='man'"></massage-list-m>
        <massage-list-w v-show="showSelectMassage==='wooman'"></massage-list-w>
      </form>
    </div>
  </section>

</template>

<script>
import MassageListM from './MassageListM.vue';
import MassageListW from './MassageListW.vue';  

export default{
    components:{MassageListM, MassageListW},
    data(){
        return{
          showSelectMassage:'man'
        }
    },
    methods:{
      ChoiseSelectMassage(){
        this.showSelectMassage=this.value;
      }
    }
}
</script>

<style>
.massage__title{
    font-size: 40px;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
}

.massage__choise-input{
	display: none;
}

.massage__choise-visible{
	margin-right: 15px;
    border: 2px solid #fac83a;
    min-height: 20px;
    min-width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.massage__choise-visible::before{
	content: "";
    height: 10px;
    width: 10px;
    background: #fac83a;
    border-radius: 50%;
    display: none;
}

.massage__choise-radio{
	display: flex;
	align-items: center;
	cursor: pointer;
}

.massage__choise-input:checked ~ .massage__choise-visible::before{
	display: block;
}

.massage__choise-list{
    display: flex;
    justify-content: space-between;
}

.massage__choise{
    margin-bottom: 20px;
}
</style>