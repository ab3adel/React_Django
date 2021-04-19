import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };
function App(props) {
  console.log(props)


  return (
   
    <div>
   
   
    <Divider orientation="left">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
     
    <Col className="gutter-row" span={6}>
    <div style={style}>{props.title}and {props.image}</div>
  </Col>
     
    </Row>
   


    </div>
  );
}

export default App;
