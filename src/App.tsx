import React from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuTtem';
import Icon from './components/Icon/icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
function App() {
  const handleClick = (e: any, num: number) => {
    console.log(e, num);
  }
  //   const codeString = `<Button btnType={ButtonType.Default} size={ButtonSize.Large}>Default</Button>
  // <Button btnType={ButtonType.Danger}>Danger</Button>
  // <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
  // <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled={true}>Disable</Button>
  // <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>
  // <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled={true}>Link</Button>`;
  return (
    <div>
      <div>
        <h1>button</h1>
        <Button>Default</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} onClick={(e) => { console.log(e.target, 1) }}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled={true}>Disable</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled={true}>Link</Button>
        <hr />
      </div>
      {/* ---------------------------- */}



      <div style={{ width: '1000px', padding: '50px' }}>
        <h1>alert</h1>
        <Alert title='This is an info alert — check it out!' type='success' onClose={(e: any)=> {handleClick(e, 1)}}></Alert>
        <Alert title='This is an info alert — check it out!' type='info' closable={true}></Alert>
        <Alert title='This is an info alert — check it out!' type='warning' closable={true}></Alert>
        <Alert title='This is an info alert — check it out!' type='error' closable={true}></Alert>
        <hr />
      </div>
      {/* ---------------------------- */}




      <h1>Menu</h1>
      <div style={{ marginLeft: '20px' }} >
        <Menu mode='horizontal' onSelect={(index) => {
          console.log(index);
        }}>
          <MenuItem label='首页'>
            首页管理
          </MenuItem>
          <MenuItem label='关于'>
            关于管理
          </MenuItem>
          <MenuItem label='加入我们'>
          </MenuItem>
          <MenuItem label='加入我们1'>
            加入我们1
          </MenuItem>
        </Menu>
      </div>
      {/* ---------------------------- */}


      <div style={{ marginTop: '100px' }}>
        <h1>icon</h1>
        <Icon icon='coffee' theme='primary' size='5x' border ></Icon>
        <Icon icon='spinner' theme='default' size='5x' ></Icon>
        <Icon icon='coffee' theme='danger' size='5x'></Icon>
      </div>
      {/* <div style={{width: '1000px', margin: 'auto'}}>
        <SyntaxHighlighter language="jsx" style={shadesOfPurple}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div onClick={(e) => {console.log(e.nativeEvent.currentTarget)}}>123</div> */}
    </div>
  );
}

export default App;
