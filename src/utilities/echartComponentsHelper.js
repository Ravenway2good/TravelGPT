// this import whole components

// import echarts from 'echarts';
// Vue.prototype.$echarts = echarts;

// this import which is need
import * as echarts from 'echarts/lib/echarts';
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/map');
require('echarts/extension/bmap/bmap');

require('echarts/lib/component/title');
require('echarts/lib/coord/cartesian/AxisModel');
require('echarts/lib/component/axis/CartesianAxisView');
require('echarts/lib/coord/Axis');
require('echarts/lib/component/axisPointer');
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/dataZoomInside');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/graphic');
require('echarts/lib/component/grid');
require('echarts/lib/component/markArea');
require('echarts/lib/component/markLine');
require('echarts/lib/component/markPoint');
require('echarts/lib/component/timeline');
require('echarts/lib/chart/pie');
require('echarts/lib/chart/scatter');
require('echarts/lib/chart/sunburst');

require('echarts/lib/component/legend');

export default echarts;
