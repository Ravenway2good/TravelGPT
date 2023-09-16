import Vue from 'vue'
import App from './App.vue'
import router from './router';
import echarts from './utilities/echartComponentsHelper.js';
import {
  Pagination,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading,
  Autocomplete,
  DatePicker,
  Input,
  Select,
  Option,
  Form,
  FormItem,
  Button,
  Radio,
  RadioButton,
  RadioGroup,
  Tag,
  Dialog,
  Icon,
  Row,
  Col,
  Divider,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  InputNumber,
  Popover,
  Upload,
  Collapse,
  CollapseItem,
  Table,
  TableColumn,
  Cascader,
  Tabs,
  TabPane,
  Progress,
  Transfer,
  Container,
  Header,
  Alert,
  Main,
  Drawer,
  Footer,
  BreadcrumbItem,
  Breadcrumb,
  Menu,
  Submenu,
  MenuItem,
} from 'element-ui';
import axios from 'axios';
axios.defaults.withCredentials = true;

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

Vue.use(Cascader);

Vue.use(Pagination);
Vue.use(Tag);
Vue.use(Container);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Select);
Vue.use(Autocomplete);
Vue.use(Loading.directive);
Vue.use(DatePicker);
Vue.use(Input);
Vue.use(Option);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Dialog);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Checkbox);
Vue.use(Divider);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(InputNumber);
Vue.use(Popover);
Vue.use(Upload);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Progress);
Vue.use(Transfer);
Vue.use(BreadcrumbItem);
Vue.use(Breadcrumb);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Alert);
Vue.use(Drawer);

new Vue({
  router, // 添加 router 实例
  render: h => h(App),
}).$mount('#app')
