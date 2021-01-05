import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
function App() {
  const codeString = `<Button btnType={ButtonType.Default} size={ButtonSize.Large}>Default</Button>
<Button btnType={ButtonType.Danger}>Danger</Button>
<Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
<Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled={true}>Disable</Button>
<Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>
<Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled={true}>Link</Button>`;
  return (
    <div>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large} onClick={(e) => {console.log(e.target)}}>Default</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled={true}>Disable</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled={true}>Link</Button>
      <div style={{width: '1000px', margin: 'auto'}}>
        <SyntaxHighlighter language="jsx" style={shadesOfPurple}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div onClick={(e) => {console.log(e.nativeEvent.currentTarget)}}>123</div>
    </div>
  );
}

export default App;
