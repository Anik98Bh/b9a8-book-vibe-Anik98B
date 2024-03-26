import ShapeChart from "./ShapeChart";

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={ShapeChart(x, y, width, height)} stroke="none" fill={fill} />;
  };

export default TriangleBar;