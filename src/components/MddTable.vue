<!-- <template>
  <div>MddTable</div>
</template> -->

<script>
export default {
  props: ["tableData", "VisibleCol"],
  data() {
    return {
      vnode: [],
    };
  },
  methods: {
    pageChange() {
      console.log("dd");
    },
  },
  created() {
    console.log('vnode',this.$slots.clomns);
    this.vnode = this.$slots.clomns;
  },
  render() {
    return (
      <div>
        <el-table data={this.tableData} style="width: 100%">
          {this.vnode.filter((node) => {
            if (this.VisibleCol.includes(node.componentOptions.propsData.label)) {
              return node;
            }
          })}
        </el-table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            total={50}
            v-on:current-change={this.pageChange}
          >
          </el-pagination>
        </div>
     </div>
    );
  },
};
</script>

<style></style>
