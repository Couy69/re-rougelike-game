<template>
  <div class="equi">
    <div
      class="eicon"
      v-if="JSON.stringify(equi) != '{}'"
      @contextmenu.prevent="openMenu($event)"
      @mouseover="showItemInfo($event, equi.itemType, equi)"
      @mouseleave="closeItemInfo"
    >
      <div
        class="icon"
        :class="{
          lv2: equi.quality.name == '稀有',
          lv3: equi.quality.name == '史诗',
          lv4: equi.quality.name == '唯一'
        }"
        :style="{ 'box-shadow': 'inset 0 0 7px 2px ' + equi.quality.color }"
      >
        <img :src="equi.category.iconSrc" alt="" />
      </div>
    </div>
    <div
      class="equiItemPanel"
      :style="itemDialogStyle"
      v-if="JSON.stringify(equi) != '{}'"
    >
      <div class="title">
        <div
          class="icon"
          :class="{
            'red-flash': equi.enchantlvl >= 13,
            unique: equi.quality.name == '独特',
            lv2: equi.quality.name == '稀有',
            lv3: equi.quality.name == '史诗',
            lv4: equi.quality.name == '唯一'
          }"
          :style="{ 'box-shadow': 'inset 0 0 7px 2px ' + equi.quality.color }"
        >
          <img :src="equi.category.iconSrc" alt="" />
        </div>
        <div class="name" :style="{ color: equi.quality.color }">
          {{ equi.category.name }}
          {{ equi.enchantlvl ? "(+" + equi.enchantlvl + ")" : "" }}
        </div>
      </div>
      <div class="type">
        <div :style="{ color: equi.quality.color }">
          {{ equi.quality.name }}
        </div>
        <div>{{ equi.typeName }}</div>
        <div>lv{{ equi.lv }}</div>
      </div>
      <div class="entry">
        <div v-for="v in equi.category.entry" :key="v.id">
          <div v-if="v.unit == 'percent'">
            {{ v.name }} : {{ Math.round(v.value * 100) }}%
            <span class="value-info">({{ Math.round(v.min * 100) }}%-{{ Math.round(v.max * 100) }}%) </span>
          </div>
          <div v-else>
            {{ v.name }} : {{ v.value }}
            <span class="value-info">({{ v.min }}-{{ v.max }}) </span>
          </div>
        </div>
      </div>
      <div class="extraEntry">
        <div v-for="v in equi.extraEntry" :key="v.id">
          <div v-if="v.unit == 'percent'">
            {{ v.name }} : {{ Math.round(v.value * 100) }}%
            <span class="value-info">({{ Math.round(v.min * 100) }}%-{{ Math.round(v.max * 100) }}%) </span>
          </div>
          <div v-else>
            {{ v.name }} : {{ v.value }}
            <span class="value-info">({{ v.min }}-{{ v.max }}) </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "equiItem",
  data() {
    return {
      itemDialogStyle: { display: "none" },
      equi: {
        // itemType: "weapon",
        // quality: {
        //   name: "史诗",
        //   qualityCoefficient: 1.5,
        //   probability: "0.15",
        //   color: "#f78918",
        //   extraEntryNum: 3
        // },
        // lv: 1,
        // type: {
        //   name: "赤柳血刃",
        //   iconSrc: "./icons/U_Sword09.png",
        //   entry: [
        //     {
        //       valCoefficient: 1.3,
        //       value: 3,
        //       showVal: "+3",
        //       type: "ATK",
        //       name: "攻击力"
        //     },
        //     {
        //       type: "HP",
        //       valCoefficient: 1.1,
        //       value: 18,
        //       showVal: "+18",
        //       name: "生命值"
        //     }
        //   ]
        // },
        // extraEntry: [
        //   {
        //     type: "DEF",
        //     value: 1,
        //     showVal: "+1",
        //     name: "防御力"
        //   },
        //   {
        //     value: "6.23",
        //     showVal: "+6.23%",
        //     type: "ATKPERCENT",
        //     name: "攻击力"
        //   },
        //   {
        //     type: "HP",
        //     value: 4,
        //     showVal: "+4",
        //     name: "生命值"
        //   }
        // ]
      }
    }
  },
  props: ["item"],
  mounted() {
    this.equi = this.$deepCopy(this.item)
  },
  watch: {
    item() {
      this.equi = this.$deepCopy(this.item)
    }
  },
  methods: {
    openMenu() {},
    showItemInfo(e, type, item, needComparison) {
      let x = e.clientX,
        y = e.clientY,
        maxH = window.innerHeight
      if (y < window.innerHeight / 2) {
        this.itemDialogStyle = {
          display: "flex",
          top: y + 20 + "px",
          left: x + 20 + "px"
        }
      } else {
        this.itemDialogStyle = {
          display: "flex",
          bottom: maxH - y + 20 + "px",
          left: x + 20 + "px"
        }
      }
    },
    closeItemInfo() {
      this.itemDialogStyle = {
        display: "none"
      }
    },
    createNewItem(equiType, qualityIndex, lv) {
      var equi = {}
      equi.itemType = equiType
      equi.quality =
        qualityIndex > -1 ? this.quality[qualityIndex] : this.createQua()
      equi.lv = lv || this.createLv()
      equi.type = this.createType(equi)
      equi.extraEntry = this.createExtraEntry(equi)
      return JSON.stringify(equi)
    },
    createLv(Max) {
      return parseInt(Math.random() * (Max || 39)) + 1
    },
    createType(equi) {
      type.entry.map(item => {
        switch (item.type) {
          case "ATK":
            var random = parseInt(
              lv * item.valCoefficient + ((Math.random() * lv) / 2 + 1)
            )
            random = parseInt(random * equi.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            item.value = "+" + random
            break
          case "DEF":
            var random = parseInt(
              lv * item.valCoefficient + ((Math.random() * lv) / 2 + 1)
            )
            random = parseInt(random * equi.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            item.value = "+" + random
            break
          case "HP":
            var random = parseInt(
              lv * item.valCoefficient * 10 + ((Math.random() * lv) / 2 + 1)
            )
            random = parseInt(random * equi.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            item.value = "+" + random
            break
          case "CRIT":
            var random = parseInt(Math.random() * 5 + 7)
            random = parseInt(random * equi.quality.qualityCoefficient)
            item.value = random
            item.value = "+" + random + "%"
            break
          case "CRITDMG":
            var random = parseInt(Math.random() * 20 + 20)
            random = parseInt(random * equi.quality.qualityCoefficient)
            item.value = random
            item.value = "+" + random + "%"
            break
          default:
            break
        }
      })
      return type
    },
    createQua() {
      var index = Math.floor(Math.random() * this.qualityProbability.length)
      var a = this.qualityProbability[index],
        b = this.qualityProbability,
        quality
      switch (a) {
        case b[0]:
          quality = this.quality[0]
          break
        case b[1]:
          quality = this.quality[1]
          break
        case b[2]:
          quality = this.quality[2]
          break
        case b[3]:
          quality = this.quality[3]
          break
        default:
          break
      }
      return quality
    },
    createExtraEntry(equi) {
      var n = equi.quality.extraEntryNum,
        extraEntry = [],
        lv = equi.lv
      for (let i = 0; i < n; i++) {
        var index = Math.floor(Math.random() * this.extraEntry.length)
        extraEntry.push(this.extraEntry[index])
      }
      var b = this.$deepCopy(extraEntry)
      b.map(item => {
        switch (item.type) {
          case "ATK":
            var random = parseInt(lv * 0.5 + ((Math.random() * lv) / 2 + 1))
            random = parseInt(random * equi.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            break
          case "DEF":
            var random = parseInt(lv * 0.2 + ((Math.random() * lv) / 2 + 1))
            random = parseInt(random * equi.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            break
          case "HP":
            var random = parseInt(
              lv * 0.2 * 10 + ((Math.random() * lv) / 2 + 1)
            )
            random = parseInt(random * equi.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            break
          case "CRIT":
            var random = parseInt(Math.random() * 5 + 5)
            random = parseInt(random * equi.quality.qualityCoefficient)
            item.value = random
            break
          case "CRITDMG":
            var random = parseInt(Math.random() * 12 + 20)
            random = parseInt(random * equi.quality.qualityCoefficient)
            item.value = random
            break
          default:
            break
        }
      })
      extraEntry = b
      return extraEntry
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-size: 15px;
}
.eicon {
  display: flex;
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.icon {
  width: 0.45rem;
  height: 0.45rem;
  background: #000;
  background-image: url(../../assets/img/border/sp2.png);
  background-size: 120%;
  display: flex;
  background-position: center;
  align-items: center;
  justify-content: center;
  border-radius: 0.04rem;
  img {
    width: 85%;
    height: 85%;
  }
}
.icon.lv2 {
  background-image: url(../../assets/img/border/sp1.png);
}
.icon.lv3 {
  background-image: url(../../assets/img/border/sp6.png);
}
.icon.lv4 {
  background-size: 120%;
  background-image: url(../../assets/img/border/sp7.png);
}
.value-info{
  font-size: 13px;
  color:#888;
  margin-left: 6px;
}
.eicon {
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
}
.icon.u {
  background-image: url(../../assets/img/border/sp2.png);
  background-size: 120%;
}
.equiItemPanel {
  color: #f1f1f1;
  width: 2.8rem;
  height: auto;
  background: rgba(0, 0, 0, 0.8);
  border: #393839;
  border-radius: 0.05rem;
  padding: 0.1rem;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  z-index: 99;
  flex-direction: column;
  .title {
    display: flex;
    padding-bottom: 0.05rem;
    border-bottom: 1px solid #777;

    .name {
      font-size: 0.16rem;
      text-shadow: 0px 0px 1px (255, 255, 255, 0.3);
      height: 0.45rem;
      margin-left: 0.2rem;
      line-height: 0.45rem;
    }
  }
  .type {
    padding: 0.1rem;
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: space-between;
  }
  .lv {
    padding-right: 0.1rem;
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: flex-end;
  }
  .entry {
    width: 100%;
    padding-left: 0.2rem;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #777;
    div {
      text-align: left;
    }
  }
  .extraEntry {
    width: 100%;
    padding-left: 0.2rem;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
    color: #68d5ed;
    border-bottom: 1px solid #777;
    div {
      text-align: left;
    }
  }
}
</style>
